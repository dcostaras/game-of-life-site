(ns game-of-life.renderer
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [clojure.set :refer [union]]
            [game-of-life.core :as gol]
            [game-of-life.patterns :as patterns]))

(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(def cells (union
             ;; ;; #{'(0 0)}
             patterns/block
             patterns/glider
             (gol/translate-pattern patterns/block '(1 1))
             (gol/translate-pattern patterns/beehive '(0 5))
             (gol/translate-pattern patterns/loaf '(6 5))
             ))

(defn setup []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  {:generation cells
   :canvas-size 500
   :block-size 20})

(defn max-point
  [generation]
  (apply max (map q/abs (mapcat flatten generation))))

(defn update-state
  [{:keys [generation canvas-size block-size]}]
  (let [current-max (max-point generation)
        bounds (> current-max (q/floor (/ canvas-size block-size 2)))]
    {:generation (gol/next-generation generation)
     :canvas-size canvas-size
     :block-size (if bounds (/ block-size 2) block-size)}))

(defn draw-state
  [{:keys [generation canvas-size block-size]}]
  (do
    (q/background 240)
    (q/fill 255 0 0)
    (let [center-offset (- (/ canvas-size 2) (/ block-size 2))]
      (doseq [[x y] generation]
        (q/rect
          (+ center-offset (* block-size x))
          (+ center-offset (* block-size y))
          block-size
          block-size)))))

(q/defsketch game-of-life-quill
  :host "game-of-life"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
