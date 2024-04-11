---
layout: docs
title: Re-ordering Policies and Requisition Worksheets
---
# Re-ordering Policies and Requisition Worksheets
Reordering policies and requisition worksheets help manage your stock by suggesting **Items to Order** and creating purchase orders based on your available inventory.

## In this article
1. [Setting up the Item Card](#setting-up-the-item-card)
2. [Setting up the Item Card for multiple locations](#setting-up-the-item-card-for-multiple-locations)
3. [Using the Requisition Worksheet Express and setting up automatic recalculation](#using-the-requisition-worksheet-express-and-setting-up-automatic-recalculation)

### Setting up the Item Card
To use the requisition worksheet you must first setup the item cards:
1. Open the **Item Card** to setup and scroll down to the **Planning** FastTab. 
2. Set the **Reordering Policy** field to **Maximum Qty** from the available options; this will enable the **Reorder Point** field.
3. The **Reorder Point** is the quantity at which the Item must be reordered. This is the data that the Garage Hive system will use to recommend an order. Add the quantity.
4. You do not need to enter your **Maximum Inventory**. 

   ![](media/garagehive-requisition-worksheet1.gif)

### Setting up the Item Card for multiple locations
1. For garages with multiple locations with different **Reorder Points**, you can use the **Stockkeeping Units** feature to specify different **Reorder Points**.
2. Select **More Options** from the **Item Card's** menu bar, then **Related**, **Warehouse**, and **Stock Keeping Units**.

   ![](media/garagehive-requisition-worksheet2.gif)

7. Select **New**, then **+New** to create a new **Stockkeeping Unit**, which functions similarly to the item card for the same item but per location.
8. Select the location to specify the **Reorder Point** in the **Location Code** field.
9. Scroll down to the **Planning** FastTab and select **Maximum Quantity** as the **Reordering Policy** and enter the quantity at which to place an order in the **Reorder Point** field.

   ![](media/garagehive-requisition-worksheet3.gif)

10. Repeat steps **7**, **8**, and **9** for all the locations.

## Using the Requisition Worksheet Express and setting up automatic recalculation
The **Requisition Worksheet** can be accessed from the Service Advisor's **Role Centre** tiles:
1. Scroll down through the tiles in the **Role Centre**, to the **Purchasing** section, and select **Items to Order** tile.

   ![](media/garagehive-requisition-worksheet4.png)

2. From the **Requisition Worksheet Express** Page, select **Calculate Plan** from the menu bar.
3. If you only have one site, leave the filters blank; if you have multiple sites, use the **Location Filter** field to select a specific location. When finished, click **Ok**. A list of suggested orders will be generated.

   ![](media/garagehive-requisition-worksheet5.gif) 

7. Select the checkboxes for the lines you want to process in the **Accept** column, choose a vendor in the **Vendor No.** column, and then choose **Process Lines** from the menu bar. Purchase orders for the relevant suppliers will be generated.

   ![](media/garagehive-requisition-worksheet6.gif)

5. To setup for an automated recalculation of what to order every morning at 4:00am, select **Purchasing** from the **Navigation** menu, then **Requisition Worksheet Express**.
6. Select **Edit List**, set the **Location Code** and check the **Enable Auto Recalc.** option on the **Default** line.

   ![](media/garagehive-requisition-worksheet6a.gif)

7. The **Item Card** may be accessed from the menu bar, and the **Item Policies** can be viewed from the **FactBox** on the right (if not visible, click on the **FactBox** icon).

   ![](media/garagehive-requisition-worksheet7.gif)


### **See Also**

[Video - Requisition Worksheet Express (V1) & Stock Control in Garage Hive](https://www.youtube.com/watch?v=-RptpsLg2kk){:target="_blank"} \
[Set up of the Cues and Actions tiles on the Role Centre](/docs/garagehive-cue-setup.html)
