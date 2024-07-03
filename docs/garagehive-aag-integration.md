---
layout: docs
title: DRAFT* - AAG (Alliance Automotive Group) Integration With Garage Hive
---

<a name="top"></a>

# We are still working on this article!
We are currently reviewing this article before it is published, check back later.

# AAG (Alliance Automotive Group) Integration With Garage Hive
AAG (Alliance Automotive Group) integration allows you to link Garage Hive to the AAG Parts 360 website, where you can directly place an order for the parts that need to be ordered and transfer them to the Garage Hive system.

## In this article
1. [Linking AAG to Garage Hive System](#linking-aag-to-garage-hive-system)
2. [Ordering Parts from AAG Parts 360 Using the Garage Hive System](#ordering-parts-from-aag-parts-360-using-the-garage-hive-system)
3. [Ordering Parts from the Purchase Order](#ordering-parts-from-the-purchase-order)
4. [Receiving Parts from the AAG Invoice into the System](#receiving-parts-from-the-aag-invoice-into-the-system)

### Linking AAG to Garage Hive system
To link AAG to the Garage Hive System:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **AAG Integrations**, and choose the related link.

   ![](media/garagehive-aag-integration1.png)

2. Select **New** to add the location to which you want to link AAG.
   
   ![](media/garagehive-aag-integration2.png)
   
3. Select the **Location Code** and enter the **AAG Account Number** given by AAG. Enter your **Part 360 Username** and **Parts 360 Password** in the respective fields.
4. Set the **Placeholder Item Number** to **MISC** and select **AAG** as the vendor number. Then choose **Purchase Order Number** as the "Vendor Reference Format"; this option ensures that AAG will use the purchase order number to reference the order when it is shipped.

   ![](media/garagehive-aag-integration3.png)

5. Slide the **Enable** slider to the right to enable the integration, and then exit the page.

   ![](media/garagehive-aag-integration4.png)

[Go back to top](#top)


### Ordering Parts from AAG Parts 360 Using the Garage Hive System
To order parts from the AAG Parts 360 website:
1. Open the document in which you want to order from, can be a Jobsheet, Estimate or VI Estimate. Select **Parts** from the menu bar, followed by **Open AAG Parts 360**.

   ![](media/garagehive-aag-ordering-parts1.png)

2. Select the vehicle and add the items you want to order to your basket on the **AAG Parts 360** website.
3. After adding the items to your basket, go back to the Garage Hive system and open the Jobsheet to add the items you are ordering.
4. Select **Parts** from the menu bar, followed by **Get AAG Basket**.

   ![](media/garagehive-aag-ordering-parts2.png)

5. Select an item to add to the Jobsheet from the page that opens, then scroll to the right and click the **Action** column. You can add it as a **New line**, **New line to a group**, or **Update an existing line**. When you're finished, click **OK**.

   ![](media/garagehive-aag-ordering-parts3.png)

6. The **Description**, **Quantity**, and **Unit Cost** of the Item lines will be updated, but the **Item No.** will remain as **MISC**.
7. The Item lines will also be marked as **Purchase (Special)** with the **Vendor No.** and the **Vendor Item No.** added.

   ![](media/garagehive-aag-ordering-parts4.png)

8. To create a purchase order for the items, from the menu bar select **Parts** and then **Create Purchase Order(s)**.

   ![](media/garagehive-aag-ordering-parts5.png)

9. In the pop-up notification, you have the option to select **Yes** and place an order from **AAG Parts 360** website which also creates a Purchase Order for the items, or **No** and simply create the Purchase Order.

   ![](media/garagehive-aag-ordering-parts6.png)

[Go back to top](#top)


### Ordering Parts from the Purchase Order
1. Open the **Purchase Order.**
2. To make an order through **AAG Parts 360 website**, select **Home** from the menu bar, followed by **AAG Order Parts**. The order will be placed, and more details will be received from AAG.

   ![](media/garagehive-aag-ordering-parts7.png)

[Go back to top](#top)


### Receiving Parts from the AAG Invoice into the System
When the items arrive, you may now convert the placeholder items to the actual item number. To do this, use the **Convert Placeholder Items** action, which is available in both the Purchase Order and the Jobsheet. Learn more [here](garagehive-creating-a-placeholder-item.html#convert-a-placeholder-item-to-the-vendor-item-number){:target="_blank"}.

- Purchase Order:

   ![](media/garagehive-aag-placeholder1.png)


- Jobsheet:

   ![](media/garagehive-aag-placeholder2.png)

[Go back to top](#top)