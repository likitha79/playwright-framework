const { test, expect } = require('@playwright/test');


test('Handling frames',async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/frames/",{timeout:30000, waitUntil:'domcontentloaded'});
    //no of frames in a page:page.frames()
    const noofframes=page.frames();
    console.log(`No of frames present are:${noofframes.length}`);
    
    // The following is to know the correct url of all frames
    /* noofframes.forEach(frame=>{
        console.log(frame.url());
    }) */

    //interact with frames:using name or url or locator or index

   /*  const frame1=page.frame({name:'left'});

     if(frame1){
       const ele= await frame1.waitForSelector("h1",{state:'visible'})
       const text=frame1.locator("h1");
       await expect(text).toHaveText("Left");
     }
     else{
        console.log("The left named frame is not present on the page");
     } */

   /*  const frame2=page.frame({url:'https://testpages.eviltester.com/frame-includes/middle.htm'});
    if(frame2){
       frame2.waitForSelector("h1",{state:'visible'});
       const ele=frame2.locator("h1");
       await expect(ele).toHaveText("Middle");
    } */

    const frame3=noofframes[4];
    await expect(frame3.locator("h1")).toHaveText("Right");
})

test.only("Nested frames",async({page})=>{
    await page.goto("https://play1.automationcamp.ir/frames.html",{timeout:60000, waitUntil:'domcontentloaded'});

    const parentframe = page.frameLocator("#frame1");  //page.frame({name:'nameofframe'})
    const childframe=parentframe.frameLocator("#frame2");

    await childframe.locator("#click_me_2").click();
    await expect(childframe.locator("#click_me_2")).toHaveText("Clicked");
})