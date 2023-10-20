from selenium import webdriver
import time
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")

driver = webdriver.Chrome(options)



# DATA 
product_name = "samsung s23 ultra"
pincode = "576114"

search_param = product_name.replace(" ","+")


def get_amazon_data(name,pin):


    driver.get("https://www.google.com/search?q="+name+" amazon")

    page_link = driver.find_element(By.XPATH,"//*[@id='rso']/div[2]/div/div/div[1]/div/div/span/a")

    page_link.click()

    time.sleep(1)

    item_link = driver.find_element(By.XPATH,"//*[@id='contextualIngressPt']")

    item_link.click()

    time.sleep(1)

    input_field = driver.find_element(By.XPATH,"//*[@id='GLUXZipUpdateInput']")

    input_field.send_keys(pin)

    apply_button = driver.find_element(By.XPATH,"//*[@id='GLUXZipUpdate']/span/input")

    apply_button.click()

    time.sleep(1)

    delivery_time = driver.find_element(By.XPATH,"//*[@id='mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE']/span/span[1]")


    print("FROM AMAZON : ",delivery_time.text.split(".")[0])

# driver.close()

def get_flipkart_data(name,pin):
    driver.get("https://www.google.com/search?q="+name+" flipart")

    page_link = driver.find_element(By.XPATH,"//*[@id='rso']/div[1]/div/div/div[1]/div/div/span/a")

    page_link.click()

    time.sleep(1)

    input_field = driver.find_element(By.XPATH,"//*[@id='pincodeInputId']")

    input_field.send_keys(pin)

    change_button = driver.find_element(By.XPATH,"//*[@id='container']/div/div[3]/div[1]/div[2]/div[8]/div/div/div[1]/div[2]/div/div[2]/div/span")

    change_button.click()

    time.sleep(1)

    delivery_time = driver.find_element(By.XPATH,"//*[@id='container']/div/div[3]/div[1]/div[2]/div[8]/div/div/div[2]/div[1]/ul/div/div/span[1]")

    print("FROM FLIPKART :",delivery_time.text)


get_amazon_data(search_param,pincode)
get_flipkart_data(search_param,pincode)




