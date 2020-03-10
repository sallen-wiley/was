@ECHO  OFF
CD %1
git add -A
git commit -m "WAS design site updates"
git push origin master