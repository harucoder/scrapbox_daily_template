//This code is from https://scrapbox.io/scrasobox/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E4%BD%9C%E6%88%90%EF%BC%88UserScript%E7%89%88%EF%BC%89

function addTemplateItemsToPageMenu() {

   //input URL here
   const __templates = [
     { title: '📄 Daily Template', template: '/api/code/.../temp_daily.js' }
   ]

   const __templMenuTitle = 'Templates'
   scrapbox.PageMenu.addMenu({ title: __templMenuTitle, image: '/assets/img/logo.png', onClick: () => { } })
   __templates.forEach((i) => {
       scrapbox.PageMenu(__templMenuTitle).addItem({
           title: i.title,
           onClick: () => { __loadTemplate(i.template) }})
   })

   var __loadTemplate = function (templateUrl) {
     if (scrapbox.Page.lines && scrapbox.Page.lines.length > 1) {

       const line = document.getElementById('L' + scrapbox.Page.lines[2].id)
       const lastChar = $(line).find('span[class^="c-"]').last().get(0)
       __mimicClick(line.id, line.offsetWidth, lastChar.offsetTop + 10)

       $('#text-input').load(templateUrl, function (response, status, xhr) {
         if (status == "success") {
           try {

             const textarea = document.getElementById('text-input')
             textarea.value = /\.js$/.test(templateUrl) ? eval(response) : response

             const event = document.createEvent('Event')
             event.initEvent('input', true, true)
             textarea.dispatchEvent(event)


             __mimicClick(line.id, line.offsetWidth, lastChar.offsetTop + 10)
           } catch (ex) {
             console.log("だめでした>< \n" + ex)
           }
         } else {
           console.log("だめでした>< \n" + status)
         }
       })
     }
   }

   const __mimicClick = (targetId, left, top) => {
     const genEvent = type => {
       const event = document.createEvent("MouseEvents")
       event.initMouseEvent(type, true, true, window, 1, 0, 0,
           left, top, false, false, false, false, 0, null)
       return event
     }

     const elm = document.getElementById(targetId)
     elm.dispatchEvent(genEvent("mousedown"))
     elm.dispatchEvent(genEvent("mouseup"))
     elm.dispatchEvent(genEvent("click"))
   }
 }

 addTemplateItemsToPageMenu()
                     console.log('scrapbox_experiment no of lines')
                     console.log(scrapbox.Page.lines.length)
