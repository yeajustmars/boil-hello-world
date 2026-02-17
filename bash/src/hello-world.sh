#!/usr/bin/env bash

print-welcome-message() {
  # This variable is interpolated by
  # Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
  local interpolated_message="{{welcome_message}}"
  echo -e "${interpolated_message}"
}

echo -e "Hello boiled Bash!"
print-welcome-message
