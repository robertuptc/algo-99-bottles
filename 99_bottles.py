def bottle_song(num):
	for x in range(num, 1, -1):
		if x > 2:
			print(f"""{x} bottles of beer on the wall, {x} bottles of beer. 
Take one down and pass it around, {x-1} bottles of beer on the wall.""")
		else:
			print("""2 bottles of beer on the wall, 2 bottles of beer. 
Take one down and pass it around, 1 bottle of beer on the wall
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall. 
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.""")

bottle_song()