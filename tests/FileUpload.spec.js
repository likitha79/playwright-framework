const { test, expect } = require('@playwright/test');
import path from 'path';

test('File Upload',async({page})=>{
    //for one file
    /* await page.goto("https://testpages.eviltester.com/pages/files/file-upload/");
    const filePath=path.join(__dirname,'uploads','One.txt');//path.join():is to name the file and also file path works correctly
    await page.setInputFiles('#fileinput',filePath);//setInputFiles('locator',filepath) */

    //for 2 files:

    await page.goto("http://uitestingplayground.com/upload");
    const file1=path.join(__dirname,'uploads','One.txt');//folder name,filename
    const file2=path.join(__dirname,'uploads','Two.txt');
    const frame=page.frameLocator("iframe[src='/static/upload.html']");
    await frame.locator("#browse").waitFor({state:'attached'});//this line added coz its taking time for page to appear
    await frame.locator("#browse").setInputFiles([file1,file2]);
    await page.waitForTimeout(5000);
})