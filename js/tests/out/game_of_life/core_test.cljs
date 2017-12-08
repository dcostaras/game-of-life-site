(ns game-of-life.core-test
  (:require [cljs.test :refer-macros [is testing]]
            [devcards.core :refer-macros [deftest]]
            [game-of-life.core :as gol]
            [game-of-life.patterns :as patterns]))

(deftest neighbours-test
  (testing "Neighbours returns all 8 surrounding cells of argument"
    (is (=
          (gol/neighbours '(0 0))
          #{'(0 1)
            '(1 1)
            '(1 0)
            '(1 -1)
            '(0 -1)
            '(-1 -1)
            '(-1 0)
            '(-1 1)}))))

(deftest count-neighbours-test
  (testing "Count neighbours counts all neighbours"
    (is (= 0 (gol/count-neighbours '(0 0) #{'(0 0)})))
    (is (= 1 (gol/count-neighbours '(0 0) #{'(0 1)})))
    (is (= 2 (gol/count-neighbours '(0 0) #{'(0 1) '(1 0)})))
    (is (= 0 (gol/count-neighbours '(0 0) #{'(10 10) '(10 0)})))
    (is (= 0 (gol/count-neighbours '(0 0) #{})))))

(deftest all-neighbours-test
  (testing "all-neighbours returns a set"
    (is (set? (gol/all-neighbours #{'(0 0)}))))
  (testing "All neighbours returns the unique neighbours of all cells in the world"
    (is (= #{} (gol/all-neighbours #{})))
    (is (=
          (gol/all-neighbours #{'(0 0)})
          (gol/neighbours '(0 0))))
    (is (not (=
               (gol/all-neighbours #{'(0 0) '(0 1)})
               #{'(0 1)
                 '(1 1)
                 '(1 0)
                 '(1 -1)
                 '(0 -1)
                 '(-1 -1)
                 '(-1 0)
                 '(-1 1)})))
    (is (=
          (gol/all-neighbours #{'(0 0) '(0 1)})
          #{'(0 2)
            '(1 2)
            '(-1 2)
            '(1 1)
            '(1 0)
            '(1 -1)
            '(0 -1)
            '(-1 -1)
            '(-1 0)
            '(-1 1)}))))

(deftest cell-alive?-test
  (testing "cell-alive? on living cell correctly handles starvation case"
    (is (= false (gol/cell-alive? '(0 0) #{'(0 0)})))
    (is (= false (gol/cell-alive? '(0 0) #{'(0 0) '(1 0)})))
    (is (= false (gol/cell-alive? '(0 0) #{'(0 0) '(10 0) '(10 1) '(11 0)}))))
  (testing "cell-alive? correctly handles over population case"
    (is (= false (gol/cell-alive?
                   '(0 0)
                   #{'(0 0)
                     '(1 0)
                     '(1 1)
                     '(0 1)
                     '(-1 1)}))))
  (testing "cell-alive? correctly handles cell resurection"
    (is (= true (gol/cell-alive?
                  '(0 0)
                  #{'(1 0)
                    '(1 1)
                    '(0 1)})))
    (is (= true (gol/cell-alive?
                  '(0 0)
                  #{'(1 0)
                    '(1 1)
                    '(0 1)
                    '(10 0)}))))
  (testing "cell-alive? correctly handles static state"
    (is (= true (gol/cell-alive?
                  '(0 0)
                  #{'(0 0)
                    '(0 1)
                    '(1 1)})))))

(deftest next-generation-test
  (testing "next-generation returns a world (set)"
    (is (set? (gol/next-generation #{'(1 1)})))
    (is (set? (gol/next-generation #{}))))
  (testing "next-generation on a 1 and sparse cell world returns empty world"
    (is (= #{} (gol/next-generation #{'(1 1)})))
    (is (= #{} (gol/next-generation #{'(1 1)
                                      '(10 10)
                                      '(20 10)}))))
  (testing "next-generation on a 2 neighbouring cell world returns empty world"
    (is (= #{} (gol/next-generation #{'(1 0)
                                      '(0 0)}))))
  (testing "all stable forms are stable"
    (doseq [i patterns/stable-forms]
      (is (= i (gol/next-generation i)))))
  (testing "all cycle 2 forms are stable over 2 cycles"
    (doseq [i patterns/cycle-2-forms]
      (is (= i (gol/next-generation (gol/next-generation i))))))
  (testing "cycle 2 forms are not stable over 1 cycle"
    (doseq [i patterns/cycle-2-forms]
      (is (not (= i (gol/next-generation i))))))
  (testing "next-generation on a lone cell with no neighbours dies"
    (is (=
          (gol/next-generation (conj patterns/block '(10 10)))
          patterns/block))))

(deftest translate-cell-test
  (testing "translate-cell returns a cell"
    (is (seq? (gol/translate-cell '(0 0) '(1 1)))))
  (testing "translate-cell correctly translates a cell on x and y axes"
    (is (= '(1 0) (gol/translate-cell '(0 0) '(1 0))))
    (is (= '(0 1) (gol/translate-cell '(0 0) '(0 1))))
    (is (= '(1 1) (gol/translate-cell '(0 0) '(1 1))))
    (is (= '(10 1) (gol/translate-cell '(0 1) '(10 0))))
    (is (= '(1 10) (gol/translate-cell '(-1 1) '(2 9))))))

(deftest translate-pattern-test
  (testing "translate-pattern returns a pattern"
    (is (set? (gol/translate-pattern patterns/block '(0 0)))))
  (testing "translate-pattern does nothing when given the identity translation"
    (is (= patterns/block (gol/translate-pattern patterns/block '(0 0)))))
  (testing "translate-pattern correctly translates a single cell patter"
    (is (= #{'(1 1)} (gol/translate-pattern #{'(0 0)} '(1 1))))
    (is (= #{'(1 1)} (gol/translate-pattern #{'(1 1)} '(0 0)))))
  (testing "translate-pattern correctly translates a full pattern"
    (is (= #{'(10 10) '(10 11) '(11 10)} (gol/translate-pattern #{'(0 0) '(0 1) '(1 0)} '(10 10))))))
