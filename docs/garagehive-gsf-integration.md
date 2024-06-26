---
layout: docs
title: GSF Integration with Garage Hive
---

<a name="top"></a>

# GSF Integration with Garage Hive

![](media/garagehive-gsf-to-garage-hive.png)

GSF integrations allows you to link Garage Hive to the GSF Allicat Online, where you may directly place an order for the parts that need to be ordered from the Garage Hive system.

## In this article
1. [Getting the System Integration Customer ID](#getting-the-system-integration-customer-id)
2. [Linking GSF to Garage Hive system](#linking-gsf-to-garage-hive-system)
3. [Ordering Parts from the GSF Allicat Online using the Garage Hive system](#ordering-parts-from-the-gsf-allicat-online-using-the-garage-hive-system)
4. [Ordering Parts from the Purchase Order](#ordering-parts-from-the-purchase-order)
5. [Receiving Parts from the GSF Invoice into the System](#receiving-parts-from-the-gsf-invoice-into-the-system)
6. [Ordering Service Package Items from GSF](#ordering-service-package-items-from-gsf)

### Getting the System Integration Customer ID
You will require a **System Integration Customer ID** before you can begin the process of linking the Garage Hive system to GSF. If you have multiple locations, you should get a **System Integration Customer ID** for each location.
You will need to do the following to obtain this information:
1. ##### Existing GSF Customer
   If you are an existing GSF Customer please complete the form within the link below. You will then receive your **System Integration Customer ID** back via email.

      > # GSF existing customer registration form: <ins>[Hive Direct Integration Form](https://docs.google.com/forms/d/e/1FAIpQLSdaRfhZRSY5WfOU2XFdmuFce30kbGulPBaeUAjmBv5-91aJ7g/viewform){:target="_blank"}</ins>

   Alternatively, you can contact your local GSF Branch with your **GSF Account No.** and request your **System Integration Customer ID** directly from them. Use this [GSF Branch Finder](https://www.gsfcarparts.com/branches){:target=" blank"} to find your local branch.

2. ##### New GSF Customer
   As a new GSF customer, you will need to contact your local GSF Branch to create an account and advise them that you would like a **System Integration Customer ID**. Use this [GSF Branch Finder](https://www.gsfcarparts.com/branches){:target=" blank"} to find your local branch.

After getting the **System Integration Customer ID**, continue to [Linking GSF to Garage Hive System](#linking-gsf-to-garage-hive-system).

[Go back to top](#top)

### Linking GSF to Garage Hive system
Follow the steps below to link GSF to the Garage Hive System using the **System Integration Customer ID** you received:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **GSF Integrations**, and choose the related link.
2. Select **New** to add the location to which you want to link GSF, then choose the **Location Code** and enter the **System Integration Customer ID** that you received in the **Customer ID** field.

   ![](media/garagehive-gsf-integration1.gif)

3. Under the **Additional** FastTab, enter the **Placeholder Item No.** for the items you order from GSF.
4. Choose the **Vendor No.** to which you want to link the items, when making a **Special Order**, then select the **Vendor Reference Format** as the **Purchase Order Number** or **VRM/KEYNO/SA** to assist GSF in referencing your order when the items are delivered. 
5. Slide the **Enable** slider to the right to enable the integration, and then exit the page.

   ![](media/garagehive-gsf-integration2.gif)

[Go back to top](#top)

### Ordering Parts from the GSF Allicat Online using the Garage Hive system
To order parts from the GSF website:
1. You may add the items from the external data lookup to the Jobsheet that you want to work on. Choose **Lookup**, followed by **Repair Times** and/or **Service Interval Matrix**. Choose the type of labour and items required for the vehicle.
1. **MISC** will be used as a placeholder for the added items.

   ![](media/garagehive-gsf-integration3.png)
   
1. Choose **Parts** from the menu bar, then **Open AlliCat Online**. This redirects you to your account at the **AlliCat Online Catalogue Portal** and opens the page where the items in the Jobsheet have been looked up using the **Vehicle Registration Number**.

   ![](media/garagehive-gsf-integration4.png)

1. Add the items from your **Shopping List** to your **Basket**, then open the **Basket** and choose **Send Quote to Garage Hive**.

   ![](media/garagehive-gsf-integration9.gif)

1. Open the Jobsheet you're working on and, from the menu bar, choose **Parts**, then **Get AlliCat Basket**.

   ![](media/garagehive-gsf-integration5.png)

1. Select an item to add to the Jobsheet from the page that opens, then scroll to the right and click the **Action** column. You can add it as a **New line**, **New line to a group**, or **Update an existing line**. When you're finished, click **OK**.

   ![](media/garagehive-gsf-integration6.png)

1. The **Description**, **Quantity**, and **Unit Cost** of the Item lines will be updated, but the **Item No.** will remain as **MISC**.
1. The Item lines will also be marked as **Purchase (Special)** with the **Vendor No.** and the **Vendor Item No.** added.

   ![](media/garagehive-gsf-integration7.png)

1. When the customer approves the work, create a purchase order from the menu bar by selecting **Parts** and then **Create Purchase Order(s)**.

   ![](media/garagehive-gsf-integration8.png)

1. In the pop-up notification, you have the option to select **Yes** and place an order from **Allicat** which also creates a Purchase Order for the items, or **No** and simply create the Purchase Order.

   ![](media/garagehive-gsf-integration11.png)

[Go back to top](#top)

### Ordering Parts from the Purchase Order
1. Open the **Purchase Order.**
2. To make an order through GSF's **AlliCat Online Catalogue Portal**, select **Home** from the menu bar, followed by **GSF Order Parts**. The order will be placed, and more details will be received from GSF.

   ![](media/garagehive-gsf-integration12.png)

[Go back to top](#top)

### Receiving Parts from the GSF Invoice into the System
When the items arrive, you may now convert the placeholder items to the actual item number. To do this, use the **Convert Placeholder Items** action, which is available in both the Purchase Order and the Jobsheet. Learn more [here](garagehive-creating-a-placeholder-item.html#convert-a-placeholder-item-to-the-vendor-item-number){:target="_blank"}.

- Purchase Order:

   ![](media/garagehive-gsf-integration9.png)


- Jobsheet:

   ![](media/garagehive-gsf-integration10.png)

[Go back to top](#top)

### Ordering Service Package Items from GSF
1. When items from the **Service Packages** are added to a document and you try to place an order from GSF, the items are not automatically added to the **Shopping List** as they are when items from the **Autodata Repair Times** are added. This is because the items have not yet been linked with the **General Part No.** that the system uses for item identification in the **GSF Allicat Online** system. 

   ![](media/garagehive-gsf-integration14.png)

2. The shopping list will be empty as shown below.

   ![](media/garagehive-gsf-integration15.png)

3. The **General Part No.** is automatically added to items via the **Autodata Repair Times** or the **GSF Allicat Online**, therefore any other item that is not from these sources does not have the **General Part No.**.

   ![](media/garagehive-gsf-integration16.png)

4. To ensure the Shopping List in **GSF Allicat Online** is automatically generated for items within a **Service Packages**, you need to manually link them to the relevant **General Part No.**. And this number can be added to/found in the column **General Part Nos.** Copy the relevant General Part No. from items added using the **Autodata Lookup**.

   ![](media/garagehive-gsf-integration17.png)

5. Paste it to the relevant Service Package Item within the document containing the items.

   ![](media/garagehive-gsf-integration18.png)

6. When you add it, the items will be added to the shopping list in **GSF Allicat Online**.

So, here is the complete process flow.

![](media/garagehive-gsf-integration13.png)


[Go back to top](#top)