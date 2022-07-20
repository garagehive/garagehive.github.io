---
layout: docs
title: GSF Integrations in Garage Hive
---

# GSF Integrations in Garage Hive
GSF integrations allow you to link Garage Hive to the [GSF Car Parts website](https://www.gsfcarparts.com/), where you may directly place an order for the parts that need to be ordered from the Garage Hive system.

## In this article
1. [Linking GSF to Garage Hive system](#linking-gsf-to-garage-hive-system)
2. [Ordering Parts from the GSF Website using the Garage Hive system](#ordering-parts-from-the-gsf-website-using-the-garage-hive-system)
3. [Ordering Parts from the Purchase Order](#ordering-parts-from-the-purchase-order)

### Linking GSF to Garage Hive system
As a GSF customer, you will need to contact your GSF local branch and get the **Customer ID** before you can begin the process of linking the Garage Hive system to GSF. If you have multiple locations, you should get a **Customer ID** for each location. After getting the **Customer ID**:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **GSF Integrations**, and choose the related link.
2. Select **New** to add the location to which you want to link with GSF, then choose the **Location Code** and enter the **Customer ID** that you got.

   ![](media/garagehive-gsf-integration1.gif)

3. Under the **Additional** FastTab, enter the **Placeholder Item No.** for the items you order from GSF.
4. Choose the **Vendor No.** to which you want to link the items, when making a **Special Order**, then select the **Vendor Reference Format** as the **Purchase Order Number** or **VRM/KEYNO/SA** to assist GSF in referencing your order when the items are delivered. 
5. Slide the **Enable** slider to the right to enable the integration, and then exit the page.

   ![](media/garagehive-gsf-integration2.gif)

### Ordering Parts from the GSF Website using the Garage Hive system
To order parts from the GSF website:
1. You may add the items from the external data lookup to the Jobsheet that you want to work on. Choose **Lookup**, followed by **Repair Times** and/or **Service Interval Matrix**. Choose the type of labour and items required for the vehicle.
1. **MISC** will be used as a placeholder for the added items.

   ![](media/garagehive-gsf-integration3.gif)
   
1. Choose **Parts** from the actions bar, then **Open AlliCat Online**. This redirects you to your account at the **AlliCat Online Catalogue Portal** and opens the page where the items in the Jobsheet have been looked up using the **Vehicle Registration Number**.

   ![](media/garagehive-gsf-integration4.gif)

1. Add the items from your **Shopping List** to your **Basket**, then open the **Basket** and choose **Send Quote to Garage Hive**.

   ![](media/garagehive-gsf-integration9.gif)

1. Open the Jobsheet you're working on and, from the actions bar, choose **Parts**, then **Get AlliCat Basket**.
1. Return to the Garage Hive system, select an item to add to the Jobsheet from the page that opens, then scroll to the right and click the **Action** column. You can add it as a **New line**, **New line to a group**, or **Update an existing line**. When you're finished, click **OK**.

   ![](media/garagehive-gsf-integration5.gif)

1. The **Description**, **Quantity**, and **Unit Cost** of the Item lines will be updated, but the **Item No.** will remain as **MISC**.
1. The Item lines will also be marked as **Purchase (Special)** with the **Vendor No.** and the **Vendor Item No.** added.

   ![](media/garagehive-gsf-integration6.gif)

1.  When the customer approves the work, create a purchase order from the actions bar by selecting **Parts** and then **Create Purchase Order(s)**.
1.  In the pop-up notification, you have the option to select **Yes** and place an order from **Allicat** as well as create a Purchase Order for the items, or **No** and simply create the Purchase Order.

   ![](media/garagehive-gsf-integration7.gif)

### Ordering Parts from the Purchase Order
1. Open the newly created **Purchase Order.**
2. To make an order through GSF's **AlliCat Online Catalogue Portal**, select **Process** from the actions bar, followed by **GSF Order Parts**. The order will be placed, and more details will be received from GSF.

   ![](media/garagehive-gsf-integration8.gif)

3. When the items arrive, you may now convert the placeholder items to the actual item number; learn more [here](garagehive-creating-a-placeholder-item.html#convert-placeholder-item-to-inventory-item).