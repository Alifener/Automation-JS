# YOTI CUCUMBER JS SELENIUM TEST

#  1. Go to https://www.yoti.com/
#  2. Click on the menu and open the menu
#  3. Go to Contact us (in the menu)
#  4. Expand “I have a question about my Yoti” section and submit the form
#  5. Verify the message displayed
#  6. Expand “I have a business question” section and submit the form
#  7. Verify the message displayed

## Running the tests on the desktop****

Prerequisite:

Chrome Installed
Chromedriver executable available on your path($PATH)

Verify chromedriver is working by opening a terminal and typing 'chromedriver'. 
export PATH=$PATH:{chromedriver_path}:.

You should see:

    Alis-MBP:alifener$ chromedriver 
    Starting ChromeDriver 2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1) on port 9515
    Only local connections are allowed.

If all seems OK, Ctrl+C to get rid of that, and carry on:

    git clone git@github.com:Alifener/YotiCucumberJs.git
    cd YotiCucumberJs
    npm install
    node_modules/grunt-cli/bin/grunt
    

