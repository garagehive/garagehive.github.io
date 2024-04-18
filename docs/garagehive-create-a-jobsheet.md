---
layout: docs
title: Using the Jobsheet
---

<a name="top"></a>

# Using the Jobsheet 
There are various methods for creating a Jobsheet, as described [**here**](garagehive-jobsheet-create-from-various-places.html){:target="_blank"}. In this article we'll look at the standard way of using the Jobsheet. The Jobsheet typically includes information about the labour and items used during the repair or maintenance process of the vehicle, as well as any additional charges or discounts.

## In this article
1. [Creating a new Jobsheet](#create-a-new-jobsheet)
2. [Add Items and Labour](#add-items-and-labour)
3. [View the Factbox and copy the VIN](#view-the-factbox-and-copy-the-vin)
4. [Setup for Jobsheet Deletion Reasons](#setup-for-jobsheet-deletion-reasons)
5. [Transferring Lines to an Estimate](#transferring-lines-to-an-estimate)

### Create a new Jobsheet
1. Select **Jobsheets** in the Home Screen, and then choose **New.**

    ![](media/garagehive-create-a-jobsheet1.gif)

1. Select the **Service Type** - This is the type of job to do.
1. Fill in the **Vehicle Registration No.**:
    - If the vehicle is in the system, the vehicle information will be auto-filled.
    - If the vehicle is not in the system, the system will look it up using **VRM** to obtain the vehicle's details.
1. Enter the current vehicle mileage, in the **Mileage** field.
1. After the VRM lookup for the vehicle, enter the customer information:
    - If the customer's information was previously entered for another vehicle, the system will obtain the customer's information and link it to the vehicle.
    - If the customer is new to the system, the system will prompt you to [Create a new customer card](docs/garagehive-create-a-customer-card.html "Create Customer Card").

    ![](media/garagehive-create-a-jobsheet2.png)

1.  You can now add the following details:
     - **Arrival Date** and **Arrival Time** - This is the day and time the vehicle will arrive on site, or when it is expected to arrive.
     - **Requested Delivery Date** and **Requested Delivery Time** - This is the date and time the customer has requested that the car be delivered after the work has been completed.
     - **External Document No.** - This is the number for the external document that is related to the work being done on the vehicle.
     - **Work Status Code** - This is the status of the work being done on the vehicle.
     - **Vehicle on Site** - This indicates that the vehicle is on site.
     - **Vehicle Staying Overnight** - This indicates that the vehicle will be staying overnight in the garage.
     - **Collection and Delivery** - This indicates whether the car should be picked up from the customer's location and delivered once the work is completed.
     - **Key Tag Text** - This is the number marked on the vehicle key attachment, which can also be a text.
     - **Key Tag No.** - This is the number marked on the vehicle key attachment, and set up in the system to help also identify parts that belong to the vehicle by using the same number in a purchase order.
     - **Marketing Channel** - This is the channel through which the customer found the business.
     - **Work Description** - This is the description of the products or services being offered, it appears at the top of the invoice when printed.

      ![](media/garagehive-create-a-jobsheet4.png)

1.  The **Vehicle Reminder Dates** FastTab shows the dates on which various vehicle parts should be changed, serviced or checked.

    ![](media/garagehive-create-a-jobsheet4a.png)

1. Under the **Checklist** subpage, you may view and access any checklists that are linked to the Jobsheet.

    ![](media/garagehive-create-a-jobsheet5.png)

1. In the **Comments** subpage, you can enter any information the customer has provided about the job to be done. 

      ![](media/garagehive-create-a-jobsheet6.png)
   
1. Under the **Group Items** section, you create groups where you add lines based on group title.  The groups help in the categorisation of the lines. Read more here [Grouping document lines](garagehive-group-items-grouping-document-lines.html){:target="_blank"}. 

    ![](media/garagehive-create-a-jobsheet6a.png)


[Go back to top](#top)

### Add Items and Labour
1. You may now begin adding **Labour** lines, **Item** lines, or **Service Packages** to the Jobsheet:
    - **Type** column - Select either **Labour** or **Item** to define what type of details are to be entered in the line.
    - **No.** column - Enter the number for **Labour** or **Item** as added in the system. For example, for labour, you can choose **service labour**, **standard labour** or other labours; for item, you can choose **inventory items** like air filters and engine oil, **non-inventory items** like consumables, or **external services** or other items.
    - **Description** column - This is the item or labour description that will appear in the customer's invoice.
    - **Quantity** column - Enter the quantity of items or hours to sell.
    - **Unit Cost** column - This is the cost of an item to the business. This field is left blank for labour.
    - **Unit Price** - This is the price at which the customer will buy the item or labour per unit.
    - **Unit Price (Calc) Incl. VAT** column - When you click on the amount in this field, a pop-up window will appear, showing the **Unit Price**, **Margin %**, **Unit Price Incl. VAT**, and **Total Incl. VAT**, allowing you to do price calculation.
    - **Line Discount %** column - If you want to apply a discount to the line, within this field, fill in the percentage discount.
    - **Line Discount Amount** column - This is the amount applied to the line as a discount. By default this column is not visible, but you can use [personalisation](garagehive-personalising-garage-hive.html){:target="_blank"} to add it.
    - **Line Amount Excl. VAT** - This is the pre-VAT total line amount.
    
         ![](media/garagehive-create-a-Jobsheet7.png)

[Go back to top](#top)

### View the Factbox and copy the VIN
1. The **FactBox** is located to the right of a Jobsheet and provides quick information and links about the work being done on the Jobsheet, the customer, and the vehicle, including a link to immediately **Copy the VIN**.

      ![](media/garagehive-create-a-jobsheet8.gif)

[Go back to top](#top)

### Setup for Jobsheet Deletion Reasons
To setup Jobsheet deletion reasons:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Service Mgt. Setup GH**, and select the related link.
2. Scroll to the **Archive** FastTab and select the **Ask for Reason on Jobsheet Delete** slider to the right. Exit the setup page.

   ![](media/garagehive-create-a-jobsheet9.gif)

3. To personalise your Jobsheet deletion reasons, choose the ![](media/search_icon.png) icon, enter **Document Deletion Reasons**, and select the related link.
4. Choose **New** from the menu bar, then **Document Type** as **Jobsheet**, a **Code** for the reason, and then the description. For example, you may enter **Booking** as the code and **Booking Cancelled** as the description.
5. Add several reasons and then exit the page when done.

   ![](media/garagehive-create-a-jobsheet10.gif)

6. Open the Jobsheet to delete, and at the top of the Jobsheet, you'll see an icon to delete a Jobsheet; click on it, choose **Yes** on the pop-up, and choose the reason for deleting the Jobsheet.

   ![](media/garagehive-create-a-jobsheet11.gif)

[Go back to top](#top)

### Transferring Lines to an Estimate
Transferring lines to an Estimate is a feature available in a Jobsheet that allows the user to create an Estimate directly from the Jobsheet when the added lines in the Jobsheet have not yet been approved by the customer. To transfer lines to an Estimate:
1. Open the Jobsheet with the lines you want to transfer, then select **Home** from the menu bar, followed by **Transfer Lines to Estimate**.

   ![](media/garagehive-transfer-lines-to-estimate1.png)

2. This opens a list of all the lines added to that Jobsheet. Select the checkboxes in the **Included** column for the lines you want to transfer to an Estimate, and then click **Transfer Lines to Estimate** from the menu bar.

   ![](media/garagehive-transfer-lines-to-estimate2.png)

3. You will see a pop-up notification that an Estimate has been created and you can open it by clicking **Yes**.

   ![](media/garagehive-transfer-lines-to-estimate3.png)

4. It is worth noting that **Group Items** are transferred as Group Items.

   ![](media/garagehive-transfer-lines-to-estimate4.png)


[Go back to top](#top)


<br>

### **See Also**

[Grouping document lines](garagehive-group-items-grouping-document-lines.html){:target="_blank"} \
[Creating a New Jobsheet From Various Places in Garage Hive](garagehive-jobsheet-create-from-various-places.html){:target="_blank"} \
[Taking a Payment and Posting a Jobsheet](garagehive-jobsheet-taking-payment.html){:target="_blank"} \
[Posted & Archived Jobsheets](garagehive-posted-archived-documents.html){:target="_blank"} \
[Managing Key Numbers in Garage Hive](garagehive-managing-key-numbers-in-the-system.html){:target="_blank"} \
[Customising Vehicle Reminder Dates](garagehive-customising-vehicle-reminder-dates.html){:target="_blank"}