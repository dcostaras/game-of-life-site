(ns game-of-life.patterns)

(def block #{'(0 0)
             '(1 0)
             '(1 -1)
             '(0 -1)})

(def beehive #{'(1 0)
               '(2 0)
               '(0 -1)
               '(3 -1)
               '(1 -2)
               '(2 -2)})

(def loaf #{'(1 0)
            '(2 0)
            '(0 -1)
            '(3 -1)
            '(1 -2)
            '(3 -2)
            '(2 -3)})

(def boat #{'(0 0)
            '(1 0)
            '(0 -1)
            '(2 -1)
            '(1 -2)})

(def stable-forms `(~block ~beehive ~loaf ~boat))

(def blinker #{'(0 0)
               '(1 0)
               '(2 0)})

(def toad #{'(1 0)
            '(2 0)
            '(3 0)
            '(0 -1)
            '(1 -1)
            '(2 -1)})


(def cycle-2-forms `(~blinker ~toad))

(def glider #{'(1 0)
              '(2 -1)
              '(0 -2)
              '(1 -2)
              '(2 -2)})

(def gliders `(~glider))
