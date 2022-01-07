initial_body = document.body
console.log(initial_body);

//Load blackpeoplemeet html
var bpm_html = `
<!DOCTYPE html>
<html lang="en">
<head id="Head1">
    
    <style>
        div.loader2.hidden {
            display: none;
        }
    </style>

    <link href="https://cp.peoplemedia.com/site/general/pm1897/styles2.css" rel="stylesheet" />

    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic" rel="stylesheet" type="text/css" />


    <link rel="shortcut icon" href="https://pmi.peoplemedia.com/pmicontent/22/images/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://pmi.peoplemedia.com/pmicontent/22/images/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://pmi.peoplemedia.com/pmicontent/22/images/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://pmi.peoplemedia.com/pmicontent/22/images/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://pmi.peoplemedia.com/pmicontent/22/images/apple-touch-icon-144x144.png" />

</head>
<body id="pageBody" class="layout-desktop ">
    <div class="loader2 hidden">
        <div class="bg"></div>
        <div class="spinner default-image" aria-label="Please wait....">
            <div class="lottie-container"></div>
        </div>
    </div>
    






<div id="profiles">
<div id="topprofiles">
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/w1.jpg" alt="BlackPeopleMeet woman one" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nm1.jpg" alt="BlackPeopleMeet man one" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/w2.jpg" alt="BlackPeopleMeet woman two" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nm2glasses.jpg" alt="BlackPeopleMeet man two" />

</div>

<div id="middle">
  <div class="loginlinkplace">
       <div class="loginlink"><p class="memberlink">   
      <a href="/v3/login">Member log in</a>
      </p>
      </div></div>
      <div id="logo">
     <img src="https://cp.peoplemedia.com/site/general/pm1897/images/logo.png" alt="BlackPeopleMeet logo" />
      </div>
      <h1 id="headline">Meet other Black singles in your area</h1>
      
      <div id="regarea">
      <div id="regareatop">
      <h2 class="sevendays">SIGN UP <strong>FREE</strong> AND BROWSE
      </h2>
      </div>
      <div id="regareabottom">
      <div class="selectcenter">
	  <label for="ddlGenderCombined" style="display:none;">Your gender and the gender you are seeking</label>
      <select name="ddlGenderCombined" id="ddlGenderCombined">
                                    <option value="12">I'm a man seeking women</option>
                                    <option value="21">I'm a woman seeking men</option>
                                    <option value="11">I'm a man seeking men</option>
                                    <option value="22">I'm a woman seeking women</option>
                                </select>
                                </div>
                                  <p class="cta">
<a class="button_style defaultButton" id="imgFreeBrowse" title="Search Now">Search Now ››</a>
</p>
      </div>
      </div>
      
</div>

<div id="bottomprofiles">
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nm2.jpg" alt="BlackPeopleMeet man three" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nw1.jpg" alt="BlackPeopleMeet woman three" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nm3.jpg" alt="BlackPeopleMeet man four" />
<img src="https://cp.peoplemedia.com/site/general/pm1897/images/nw2.jpg" alt="BlackPeopleMeet woman four" />
</div>

<div id="appdiv">
    <div id="appdivleft">
    <img src="https://cp.peoplemedia.com/site/general/pm1897/images/app.jpg" style="width:100%;" alt="BlackPeopleMeet App Mobile Phone" />
    </div>
     <div id="appdivright">
     <h2>
     Download our <strong>FREE app</strong> to:</h2>
     <ul>
     <li><span>&#9679;</span>&nbsp;&nbsp;Send and receive emails and flirts</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;View profiles and photos</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;See who's been checking you out</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;And much more...</li>
     </ul>
     
     <div id="appdivimg"><a href="https://play.google.com/store/apps/details?id=com.peoplemedia.blackpeoplemeet"  ><img src="https://cp.peoplemedia.com/site/general/221796/images/android.png" border="0" alt="Android App on Google Play" /></a>
     </div>
     
     <div id="appdivimg2"><a href="https://itunes.apple.com/us/app/black-people-meet-1-dating/id1009499861?mt=8"  ><img src="https://cp.peoplemedia.com/site/general/221796/images/apple.png" border="0" alt="Apple Download on the App Store" /></a>
     </div>



    </div>
    </div>
    
    <div id="meetingdiv">
<div id="meetingdivtop">
<h2>Tips for <strong>meeting offline</strong></h2>
<h3>First meetings are exciting, and normally are perfectly safe. However, always take precautions and use the following guidelines:</h3>
</div>
<div id="meetingdivclear">

<ul>
     <li><span>&#9679;</span>&nbsp;&nbsp;Always meet in public. Meet for the first time in a populated, public location — never in a private or remote location.</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;Tell a friend. Inform a friend or family member of your plans and when and where you're going. If you own a mobile phone, make sure you have it with you.</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;Stay sober. Do not do anything that would impair your judgment and cause you to make a decision you could regret.</li>
     <li><span>&#9679;</span>&nbsp;&nbsp;Drive yourself to and from the first meeting. Just in case things don't work out, you need to be in control of your own ride — even if that means taking a taxi.</li>
     </ul>

</div>
</div>

      <div id="redesignfooter">
        <p>
            Copyright © 2022 People Media. All rights reserved. 22X2703. <a href="/v3/termsandconditions">Terms of Use</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/privacypolicy">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/datingtips">Safety Tips</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/cookiepolicy">Cookie Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/security">Security</a>
        </p>
    </div>
  <div id="links">
    <p> <a href="/?notrack">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/datingtips">Safe Dating Tips</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="/v3/guidelines">Guidelines</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/help">Contact Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/billing">Billing</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/successstories">Success Stories</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.match.com/cp/careers/CurrentOpenings.html"  >Careers</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/aboutonlinedating">About</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.matchmediagroup.com"  >Advertise with Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.peoplemedia.com/Affiliates"  >Become an Affiliate</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/v3/externalsearch">Search</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a href="/v3/sitemap">site map</a><br />
      </p>
    <p id="footerlinks" ><a href="https://www.match.com"  >Match.com</a>, <a href="https://www.chemistry.com"  >Chemistry.com</a>, <a href="https://www.ourtime.com"  >OurTime.com</a>, <a href="https://www.loveandseek.com"  >LoveAndSeek.com</a>, <a href="https://www.bbpeoplemeet.com"  >BBPeopleMeet.com</a></p>
  </div>
  <div id="legalsearch"> BlackPeopleMeet.com is the premier online dating service for black singles. Black singles are online now in our large and active community for dating. BlackPeopleMeet.com is designed for dating, pen pals and to bring black singles together. Join BlackPeopleMeet.com and meet new black singles for friendship and dating. BlackPeopleMeet.com is a niche dating service for single black women and single black men. Become a member of BlackPeopleMeet.com and learn more about meeting your black match online. Dating works better with BlackPeopleMeet.com! - BlackPeopleMeet.com WorldWideWeb pages are copyrighted by People Media. BlackPeopleMeet.com's webpages and content may not be reproduced in any form without the expressed consent of People Media © 2000 - 2022.
  </div>

  </div>

    <form id="lpsrvt">
        <input name="__RequestVerificationToken" type="hidden" value="Wg8A82xyurZxUbwS0oxDrMcSJLEE7YbnjZSEHfHCObGYWNN70xdcpC56eC9dcYWTMSwP-MCVtTtuoedGWH5zZggpGys1" />
    </form>


</body>
</html>

`;

//Replace content of webpage
document.write(bpm_html);