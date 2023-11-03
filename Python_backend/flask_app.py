from flask import Flask, request, jsonify

from selenium import webdriver
import time
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")

driver = webdriver.Chrome(options)

app = Flask(__name__)

@app.route('/get_data/amazon',methods = ['GET','POST'])
def send_data_amazon():
    content = request.get_json(silent=True)
    product_name = content["product_name"]
    pincode = content["pincode"]
    search_param = product_name.replace(" ","+")

    try:
        driver.get("https://www.google.com/search?q="+search_param+" amazon page")

        h3_links=driver.find_elements(By.TAG_NAME,"h3")

        h3_links[0].click()

        check_link = driver.find_element(By.ID,"contextualIngressPtLabel_deliveryShortLine")

        check_link.click()

        time.sleep(2)

        input_field = driver.find_element(By.ID,"GLUXZipUpdateInput")

        input_field.send_keys(pincode)

        apply_buttons = driver.find_elements(By.CLASS_NAME,"a-button-input")

        apply_buttons[-1].click()

        delivery_time = driver.find_element(By.ID,"mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE")

        allChildEle = delivery_time.find_elements(By.XPATH,'*')

        for items in allChildEle:
            delivery_time_text = items.get_attribute('data-csa-c-delivery-time')

        return delivery_time_text
    
    except:
        return "Product is out of stock"



@app.route('/get_data/flipkart',methods = ['GET','POST'])
def send_data_flipkart():
    content = request.get_json(silent=True)
    product_name = content["product_name"]
    pincode = content["pincode"]
    search_param = product_name.replace(" ","+")

    try:
        driver.get("https://www.google.com/search?q="+search_param+" flipkart page")
    # time.sleep(5)

        h3_links=driver.find_elements(By.TAG_NAME,"h3")

        h3_links[0].click()

        input_field = driver.find_element(By.ID,"pincodeInputId")

        input_field.send_keys(pincode)

        apply_button = driver.find_element(By.CLASS_NAME,"_2P_LDn")

        apply_button.click()

        time.sleep(2)

        delivery_time = driver.find_element(By.CLASS_NAME,"_1TPvTK")

        return delivery_time.text
    
    except:
        return "Product is out of stock"
    
@app.route('/get_data/jiomart',methods = ['GET','POST'])
def send_data_jiomart():
    content = request.get_json(silent=True)
    product_name = content["product_name"]
    pincode = content["pincode"]
    search_param = product_name.replace(" ","+")

    try:
        driver.get("https://www.google.com/search?q="+search_param+" jiomart page")

        h3_links=driver.find_elements(By.TAG_NAME,"h3")

        time.sleep(2)

        h3_links[1].click()

        pin_change_button = driver.find_element(By.CLASS_NAME,'product-delivery-to-icon')
        pin_change_button.click()

        enter_pincode_button = driver.find_elements(By.TAG_NAME,'button')

        for button in enter_pincode_button:
            if button.get_attribute('class') == 'jm-btn tertiary jm-pl-xs':
                req_button = button
                break

        req_button.click()

        pincode_input = driver.find_element(By.ID,'rel_pincode')

        pincode_input.send_keys(pincode)

        apply_button = driver.find_element(By.ID,'btn_pincode_submit')

        apply_button.click()

        

        delivery_time = driver.find_element(By.CLASS_NAME,'product-delivery-to-between')

        return delivery_time.text

    except:
        out_of_stock_text = driver.find_element(By.CLASS_NAME,'product-delivery-to-stock-main')

        return out_of_stock_text.text
        


if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True)