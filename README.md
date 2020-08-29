TODO: add about page

This site allows you to find an optimal fingering for an arbitrary piano piece by using a simple dynamic programming algorithm. The "optimality" is based on difficulty ratings assigned to the transitions between one note and the next. The difficulty ratings primarily conside three things: distance between notes, which fingers are used to play each note, and whether a black key or a white key is used for each note. The ratings and pretty much the entire idea were inspired by "Finding Optimal Piano Fingerings," by Melanie Hart and Robert Bosch (found here: http://web.gps.caltech.edu/~tsai/files/HartBoschTsai_2000.pdf). The implementation also uses the ABCJS library for its musical notation. 

Why this site sucks:<br>
-It only works for fingerings with your right hand <br>
-It doesn't work with chords <br>
-Probably more 
