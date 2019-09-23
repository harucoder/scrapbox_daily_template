(function(){

  //get day from title
  var date = new Date(scrapbox.Page.title)
  var dayOfWeek = date.getDay()
  console.log(dayOfWeek)

  //load js file according to day of the week
  //set routine schedules and tasks here
  var routine = [
    {day: "Sunday" , schedule: "routine schedule on Sunday" , task:"routine tasks on Sunday"},
    {day: "Monday" , schedule: "routine schedule on Monday" , task:"routine tasks on Monday"},
    {day: "Tuesday", schedule: "routine schedule on Tuesday", task:"routine schedule on Tuesday"},
    {day: "Wednesday" , schedule: "routine schedule on Wednesday" , task:"routine tasks on Wednesday"},
    {day: "Thursday" , schedule: "routine schedule on Thursday" , task:"routine tasks on Thursday"},
    {day: "Friday", schedule: "routine schedule on Friday", task:"routine schedule on Friday"},
    {day: "Saturday" , schedule: "routine schedule on Saturday" , task:"routine tasks on Saturday"}
]


  //$.getScript("/api/code/.../")は使えない
  return `今日は${routine[dayOfWeek].day}
--------------------------
[イベント]
${routine[dayOfWeek].schedule}



--------------------------
[やること]



${routine[dayOfWeek].task}`
})()


