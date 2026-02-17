(ns hello-world)

(defn print-welcome-message []
  ;; This variable is interpolated by
  ;; Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
  (let [interpolated-message "{{welcome_message}}"]
    (println interpolated-message)))

(defn -main []
  (println "Hello boiled Clojure!")
  (print-welcome-message))
