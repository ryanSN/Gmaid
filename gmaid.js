//Alex Maki-Jokela
//Written sometime in 2016ish
//Updated by Ryan Chatterton 2018ish

function cleanInbox() {
  var delayDays = 3 // Enter # of days before messages are moved to archive
  
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  
  var threads = GmailApp.getInboxThreads(0,500);
  
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate && !threads[i].hasStarredMessages())
      {
        threads[i].moveToArchive();
      }
  }
}

function cleanPromotionsAndSocial() {
  var delayDays = 3;
  var maxDate = new Date();
  var threads = GmailApp.search('in:promos OR in:social');
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate && !threads[i].hasStarredMessages())
      {
        threads[i].moveToArchive();
      }
  }
}
