(ns game-of-life.core
  (:require [clojure.set :refer [intersection difference union]]
            [clojure.math.combinatorics :refer [cartesian-product]]))

(def world #{[1 1] [0 1]})

(defn neighbours
  [[x y :as cell]]
  (let [product (cartesian-product
                  (range (dec x) (+ 2 x))
                  (range (dec y) (+ 2 y)))]
    (disj (set product) cell)))

(defn count-neighbours
  [cell world]
  (count (intersection world (neighbours cell))))

(defn cell-alive?
  [cell world]
  (let [count-of-neighbours (count-neighbours cell world)]
    (cond
      (= count-of-neighbours 2) (contains? world cell)
      (= count-of-neighbours 3) true
      (> count-of-neighbours 3) false
      (< count-of-neighbours 2) false)))

(defn all-neighbours
  [world]
  (difference (set (mapcat neighbours world)) world))

(defn next-generation
  [world]
  (set (filter
         #(cell-alive? % world)
         (union world (all-neighbours world)))))

(defn translate-cell
  [[x y] [x1 y1]]
  (list (+ x x1) (+ y y1)))

(defn translate-pattern
  [pattern translation]
  (set (map #(translate-cell % translation) pattern)))
