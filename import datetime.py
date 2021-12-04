import datetime

Birthday = int(input("Enter your day?: "))

if Birthday>31 :
    print("Invalid")
   
Birthmonth = int(input("Enter your month?: "))

if Birthmonth>=12 :
    print(str("Invalid"))
Birthyear = int(input("Enter your year?: "))

if Birthyear>=2021 :
    print("Invalid")


Nowday =int(input("Enter your day?: "))
Nowmonth =int(input("Enter your month?: "))
Nowyear =int(input("Enter your year?: "))


agec1= (Nowyear-Birthyear)*365
agec2= (Nowmonth-Birthmonth)*31
if agec2<0 :
    -1*agec2
agec3=  (Nowday-Birthday)
if agec3<0 :
    -1*agec3

ageindays= agec1+agec2+agec3
print("The person has been living for" + str(ageindays) +"days")

aged1= (Nowyear-Birthyear)*8766
aged2= (Nowmonth-Birthmonth)*730
if aged2<0 :
    -1*aged2
aged3=  (Nowday-Birthday)*24
if aged3<0 :
    -1*aged3   
ageinhours= aged1+aged2+aged3
print("The person has been living for"+ str(ageinhours)+ "hours" )











