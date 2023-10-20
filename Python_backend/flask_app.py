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

@app.route('/get_data',methods = ['GET','POST'])
def send_data():
    content = request.get_json(silent=True)
    product_name = content["product_name"]
    pincode = content["pincode"]

    response_data = {}

    search_param = product_name.replace(" ","+")

    # AMAZON CALLS 
    driver.get("https://www.google.com/search?q="+search_param+" amazon")

    page_link = driver.find_element(By.XPATH,"//*[@id='rso']/div[2]/div/div/div[1]/div/div/span/a")

    page_link.click()

    time.sleep(2)

    item_link = driver.find_element(By.XPATH,"//*[@id='contextualIngressPt']")

    item_link.click()

    time.sleep(2)

    input_field = driver.find_element(By.XPATH,"//*[@id='GLUXZipUpdateInput']")

    input_field.send_keys(pincode)

    apply_button = driver.find_element(By.XPATH,"//*[@id='GLUXZipUpdate']/span/input")

    apply_button.click()

    time.sleep(2)

    delivery_time = driver.find_element(By.XPATH,"//*[@id='mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE']/span/span[1]")

    response_data["AMAZON"] = delivery_time.text
    print("AMAZON DONE")

    # FLIPKART CALLS 
    driver.get("https://www.google.com/search?q="+search_param+" flipart")

    page_link = driver.find_element(By.XPATH,"//*[@id='rso']/div[1]/div/div/div[1]/div/div/span/a")

    page_link.click()

    time.sleep(2)

    input_field = driver.find_element(By.XPATH,"//*[@id='pincodeInputId']")

    input_field.send_keys(pincode)

    change_button = driver.find_element(By.XPATH,"//*[@id='container']/div/div[3]/div[1]/div[2]/div[8]/div/div/div[1]/div[2]/div/div[2]/div/span")

    change_button.click()

    time.sleep(2)

    delivery_time = driver.find_element(By.XPATH,"//*[@id='container']/div/div[3]/div[1]/div[2]/div[8]/div/div/div[2]/div[1]/ul/div/div/span[1]")

    response_data["FLIPKART"] = delivery_time.text

    print("FLIPKART DONE")

    # return jsonify(response_data)
    # 
    # print(response_data)
    return response_data
    # return "All good"

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True)