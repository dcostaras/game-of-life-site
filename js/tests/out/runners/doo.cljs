(ns runners.doo
  (:require [doo.runner :refer-macros [doo-all-tests]]
            [runners.tests]))

(doo-all-tests #"(advent-of-code-2017)\..*-test")
