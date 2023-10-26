from selenium import webdriver
import time
from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
# options.add_argument('headless')
# options.add_argument('window-size=1920x1080')
# options.add_argument("disable-gpu")

driver = webdriver.Chrome(options)



# DATA 
product_name = "samsung s23 ultra"
pincode = "576213"

response_data = {}

search_param = product_name.replace(" ","+")



def get_flipkart_data(name,pin):

    driver.get("https://www.google.com/search?q="+name+" flipkart page")
    # time.sleep(5)

    h3_links=driver.find_elements(By.TAG_NAME,"h3")

    h3_links[0].click()

    # print("Link clicked")

    # page_link = WebDriverWait(driver,20).until(EC.visibility_of_all_elements_located((By.CLASS_NAME,"LC20lb MBeuO DKV0Md")))

    # anchor_tag = page_link.find_element(By.XPATH,"parent::*")

    

    # time.sleep(5)

    # item_link = driver.find_element(By.ID,"pincodeInputId")

    # item_link.click()

    # time.sleep(2)

    input_field = driver.find_element(By.ID,"pincodeInputId")

    input_field.send_keys(pin)

    apply_button = driver.find_element(By.CLASS_NAME,"_2P_LDn")

    apply_button.click()



    time.sleep(2)

    delivery_time = driver.find_element(By.CLASS_NAME,"_1TPvTK")

    response_data["FLIPKART"] = delivery_time.text

    # print("FROM FLIPKART : ",delivery_time.text)


# driver.close()

def get_amazon_data(name,pin):
    driver.get("https://www.google.com/search?q="+name+" amazon page")

    h3_links=driver.find_elements(By.TAG_NAME,"h3")

    h3_links[0].click()

    # time.sleep(5)

    check_link = driver.find_element(By.ID,"contextualIngressPtLabel_deliveryShortLine")

    check_link.click()

    time.sleep(2)

    input_field = driver.find_element(By.ID,"GLUXZipUpdateInput")

    # change_button.click()
    input_field.send_keys(pin)

    # time.sleep(5)

    # delivery_time = driver.find_element(By.XPATH,"/html/body/div[1]/div/div[3]/div[1]/div[2]/div[7]/div/div/div[2]/div[1]/ul/div/div/span[1]")

    # response_data["FLIPKART"] = delivery_time.text

    apply_buttons = driver.find_elements(By.CLASS_NAME,"a-button-input")

    # print(apply_buttons.ge)
    # for button in apply_buttons:
    #     print(button.get_attribute('aria-labelledby'))
    apply_buttons[-1].click()
    # time.sleep(10)

    delivery_time = driver.find_element(By.ID,"mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE")

    # response_data["AMAZON"] = delivery_time.text

    allChildEle = delivery_time.find_elements(By.XPATH,'*')

    for items in allChildEle:
        delivery_time_text = items.get_attribute('data-csa-c-delivery-time')

    # print("FROM AMAZON : ",delivery_time_text)
    response_data["AMAZON"] = delivery_time_text

# get_amazon_data(search_param,pincode)
# time.sleep(2)
get_flipkart_data(search_param,pincode)

print(response_data)


