---
layout: docs
title: Creating a Jobsheet
---

# Creating a Jobsheet 
To create a new Jobsheet:
1. Select **Jobsheets** in the Home Screen, followed by **New.**
2. Select the **Service Type** - This is the type of job to do.

   ![](media/garagehive-create-an-estimate1.gif)

3. Fill in the **Vehicle Registration No.**:
    - If the vehicle is in the system, the customer card will be auto-filled.
    - If the vehicle is not in the system, the system will look it up using **VRM** to obtain the vehicle's details.
4. Enter the current vehicle mileage, in the **Mileage** field.

    ![](media/garagehive-create-an-estimate2.gif)

5. After the VRM lookup for the vehicle, enter the customer information:
    - If the customer's information was previously entered for another vehicle, the system will obtain the customer's information and link it to the vehicle.
    - If the customer is new to the system, the system will prompt you to [Create a new customer card](docs/garagehive-create-a-customer-card.html "Create Customer Card").
5. Fill in **Address & Contact** FastTab in the **Customer** card:
    - Select **Lookup Address from Postcode**, enter the **Postcode**, click **OK**, and then select the appropriate address.
    - Fill in the contact information, including phone number and email address.

         ![](media/garagehive-create-an-estimate3.gif)

6. You can now add the following details:
   - **Arrival Date** and **Arrival Time** - This is the day and time the vehicle will arrive on site, or when it is expected to arrive.
   - **Requested Delivery Date** and **Requested Delivery Time** - This is the date and time the customer has requested that the car be delivered after the work has been completed.
   - **External Document No.** - This is the number for the external document that is related to the work being done on the vehicle.
   - **Work Status Code** - This is the status of the work being done on the vehicle.
   - **Vehicle on Site** - This indicates that the vehicle is on site.
   - **Vehicle Staying Overnight** - This indicates that the vehicle will be staying overnight in the garage.
   - **Collection and Delivery** - This indicates whether the car should be picked up from the customer's location and delivered once the work is completed.
   - **Key Tag Text** - This is the number marked on the vehicle key attachment, which can also be a text.
   - **Key Tag No.** - This is the number marked on the vehicle key attachment, and set up in the system to help also identify parts that belong to the vehicle by using the same number in a purchase order.
   - **Marketing Channel** - This is the channel through which the customer was acquired.
   - **Work Description** - This is the description of the products or services being offered, it appears at the top of the invoice when printed.

7. 
7. You can enter any information the customer has provided about the estimate in the **Comments** section. 

   ![](media/garagehive-create-an-estimate4.gif)
   

8. You can now begin adding **Labour** lines, **Items** lines, or **Service Packages** to the estimate:
    - **Type** column - Select either **Labour** or **Item** as the line, with **External Services** included in the latter.
    - **No** column - Enter the number for **Labour** or **Item**, in the system. For the item that you don't have in stock, you can use a placeholder item number, such as **MISC**.
    - **Description** column - This is the item or labour description that will appear in the customer's estimate.
    - **Quantity** column - Enter the number of items or hours to quote.
    - **Unit Cost** column - This is the cost of an item to the business. This field is left blank for labour.
    - **Unit Price** - This is the price at which the customer will buy the item or labour per unit.
    - **Line Amount Excl. VAT** - This is the pre-VAT total line amount. 
    - **Unit Price (Calc) Incl. VAT** column - If you click on the amount in this field, a pop-up window will appear, allowing you to do your price calculation. This can be used to add a percent margin to the cost price.
    - **Line Discount** column - If you'd like to apply a discount to the job, within this field, fill in the percentage discount. 

      ![](media/garagehive-create-an-estimate5.gif)

9.  If you click on any amount under the **Totals Including VAT**, which is below the estimate lines, a pop-up window appears which shows the **Document Total**, **Price Calculation**, **Customer Authorised** totals and **Customer Unauthorised** totals.

   ![](media/garagehive-create-an-estimate6.gif)

### When the work in the estimate is authorised
You can either create a jobsheet with all of the items from the estimate added to it, which will close the estimate, or you can select specific lines from the estimate to add to an open jobsheet if one already exists. 
To convert the whole estimate into a jobsheet:
1. In the actions bar, select **Process**, then **Make Jobsheet**. This will convert your estimate into a jobsheet, which you can then use to [create an allocation for the job](garagehive-create-a-booking.html) in the schedule for the relevant day.

   ![](media/garagehive-create-an-estimate7.gif)

To Select partial lines from the estimate to add to an open Jobsheet:
1. From the estimate lines, tick the checkbox in **Customer Authorised** field, for all the lines that have been authorised by the customer.
2. Then, select **Process** from actions bar, followed by **Copy Authorised Lines to Jobsheet**, and select the jobsheet to which you want to copy the lines, and click **OK**. This will add the selected lines to the selected jobsheet.

   ![](media/garagehive-create-an-estimate8.gif)
