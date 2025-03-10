test> show dbs <br/>
admin    40.00 KiB <br/>
config   84.00 KiB <br/>
local    72.00 KiB <br/>
test      8.00 KiB <br/>
usersDB  72.00 KiB <br/>
 <br/>
test> use studentsDB <br/>
switched to db studentsDB <br/>
<br/>
studentsDB> show dbs <br/>
admin    40.00 KiB <br/>
config   84.00 KiB <br/>
local    72.00 KiB <br/>
test      8.00 KiB <br/>
usersDB  72.00 KiB <br/>
 <br/>
studentsDB> db <br/>
studentsDB <br/>
 <br/>
studentsDB> db.createCollection('students') <br/>
{ ok: 1 } <br/>
 <br/>
studentsDB> show collections <br/>
students <br/>
 <br/>
studentsDB> db.createCollection('teachers') <br/>
{ ok: 1 } <br/>
 <br/>
studentsDB> show collections <br/>
students <br/>
teachers <br/>
 <br/>
studentsDB> show dbs <br/>
admin       40.00 KiB <br/>
config      84.00 KiB <br/>
local       72.00 KiB <br/>
studentsDB  16.00 KiB <br/>
test         8.00 KiB <br/>
usersDB     72.00 KiB <br/>
 <br/>
studentsDB> db.dropDatabase() <br/>
{ ok: 1, dropped: 'studentsDB' } <br/>
 <br/>
studentsDB> show dbs <br/>
admin    40.00 KiB <br/>
config   84.00 KiB <br/>
local    72.00 KiB <br/>
test      8.00 KiB <br/>
usersDB  72.00 KiB <br/>

---

