if status is-interactive
# Commands to run in interactive sessions can go here
end
# Fish.
set fish_greeting "" 

# Pfetch.
set -gx PF_INFO "ascii title kernel os wm pkgs memory uptime"
set -gx PF_COL1 "4"
set -gx PF_COL2 "9"
set -gx PF_COL3 "1"

# Environment
source ~/.profile

eval  $(starship init fish)
echo "" && fastfetch
