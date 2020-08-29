This site allows you to find an optimal fingering for an arbitrary piano piece by using a simple dynamic programming algorithm. The "optimality" is based on difficulty ratings assigned to the transitions between one note and the next. The difficulty ratings primarily conside three things: distance between notes, which fingers are used to play each note, and whether a black key or a white key is used for each note. The ratings and pretty much the entire idea were inspired by Melanie Hart and Robert Bosch in their paper <a href="http://web.gps.caltech.edu/~tsai/files/HartBoschTsai_2000.pdf">Finding Optimal Piano Fingerings</a>. The implementation also uses the <a href="https://github.com/paulrosen/abcjs">ABCJS library</a> for its musical notation. 

Why this site sucks:<br>
-It only works for fingerings with your right hand <br>
-It doesn't work with chords <br>
-You have to learn abcjs notation <br>
-Probably more 

