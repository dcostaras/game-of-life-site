(ns figwheel.connect.build-devcards-test (:require [devcards.core :include-macros true] [figwheel.client] [figwheel.client.utils] [runners.browser]))
(figwheel.client/start {:devcards true, :open-urls ["http://localhost:3449/tests.html"], :build-id "devcards-test", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)

