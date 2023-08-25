Assume the following directory structure:

lua
Copy code
/
|-- home/
|   |-- user/
|       |-- documents/
|           |-- report.txt
|-- var/
|   |-- www/
|       |-- html/
|           |-- index.html
|-- temp/
    |-- data.txt


Absolute Path Examples:

Absolute path to report.txt: /home/user/documents/report.txt
Absolute path to index.html: /var/www/html/index.html
Absolute path to data.txt: /temp/data.txt
In each of these examples, the path starts from the root directory / and goes through the necessary directories to reach the target file.






Relative Path Examples (assuming you are currently in the /var/www/html/ directory):

Relative path from index.html to report.txt: ../../../home/user/documents/report.txt
Here, ../../.. moves up three levels to the root directory, then the path proceeds to the target file.
Relative path from index.html to data.txt: ../../../../../temp/data.txt
Similar to the previous example, you need to move up several levels before reaching the temp directory.
Relative Path Examples (assuming you are currently in the /home/user/documents/ directory):

Relative path from report.txt to index.html: ../../../var/www/html/index.html

Moving up three levels takes you to the root directory, and then you proceed to the var/www/html directory.
Relative path from report.txt to data.txt: ../../../../temp/data.txt

Again, moving up multiple levels gets you to the root directory, from where you proceed to the temp directory.
In the relative path examples, the number of ../ segments indicates how many levels you need to go up in the directory hierarchy before reaching the target directory. This illustrates the concept of navigating relative to the current working directory.