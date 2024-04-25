---
layout: docs
title: Working with a Placeholder Item
---

<a name="top"></a>

## Working with a Placeholder Item
Placeholder Item is used when waiting on purchase invoice from the supplier; it enables you to add the items to the Estimates, Vehicle Inspection Estimates, Jobsheets, or Purchase Orders without the supplier's purchase invoice.

## In this article
1. [Creating a Placeholder Item](#creating-a-placeholder-item)
2. [Add Placeholder Item in a document](#add-placeholder-item-in-a-document)
3. [Convert a Placeholder Item into an inventory item](#convert-a-placeholder-item-into-an-inventory-item)
4. [Convert a Placeholder Item to the Vendor Item Number](#convert-a-placeholder-item-to-the-vendor-item-number)

### Creating a Placeholder Item
To create a placeholder item:
1. click on **Items** from the navigation bar in the Role Centre.

    ![](media/garagehive-placeholder-item1.png)

2. Select **New** from the items list page that opens.

   ![](media/garagehive-placeholder-item2.png)

3. Assign an **Item Template** and click **OK**.

   ![](media/garagehive-placeholder-item3.png)

4. Add an **Item No.** and **Description** according to your preference (in this case, the Item No. will be **MISC** and description **Placeholder Item**). 

    ![](media/garagehive-placeholder-item4.png)

5. Scroll down to the **Costs and Posting** FastTab and select the slider on **Placeholder Item** field.
6. If you can't see the option, click on **Show More** at the top-right corner of the section.

![](media/garagehive-placeholder-item5.png)

[Go back to top](#top)

### Add Placeholder Item in a document
Once you create a placeholder item, you can add it to a document (Can be Jobsheet, Estimate or Vehicle Inspection Estimate) for items that you haven't received a purchase invoice for yet. To add it in a Jobsheet:
1. Open the particular Jobsheet and select **Item** from the **Type** column in the Jobsheet lines. 
2. Type the placeholder item name in the **No.** column and press the tab key. 
3. Add a description and unit price; do not rename the placeholder item.

   {% include tip.html title="Tip" text="The placeholder item can be used as many times as need be." %}

   ![](media/garagehive-placeholder-item6.png)

4. You can as well [Create a Purchase Order for the Item from the Jobsheet](garagehive-create-a-purchase-order.html){:target="_blank"}.

[Go back to top](#top)

### Convert a Placeholder Item into an inventory item
When you receive the Purchase Invoice from the supplier, convert the placeholder item to the item on the Purchase Invoice. To do this from the **Purchase Order**:
1. Open the **Purchase Order** and replace the placeholder item **No** with the actual item **No.** from the vendor's purchase invoice.
2. Select **Create a new item card for (Item No.)** in the pop-up window and click **OK**.
3. On the next page, choose a template for the new item and click **OK**. The placeholder item **No.** will be replaced, but the description will stay.

   ![](media/garagehive-placeholder-item3a.gif)

[Go back to top](#top)

### Convert a Placeholder Item to the Vendor Item Number
Use this method when the **Vendor Item No.** field is prefilled using the external integration available in Garage Hive. To do this from the Purchase Order:
1. Open the **Purchase Order** and select **Home**, then **Convert Placeholder Items** from the menu bar.

   ![](media/garagehive-placeholder-item7.png)

2. Scroll to the right to the **Action** column, and for each item, click the **Create Item** action and select the template on the page that appears.
3. When you're done with all of the items, click **OK**.

   ![](media/garagehive-placeholder-item8.png)

To convert the items in the **Jobsheet**:
1. Open the Jobsheet with the placeholder items, select **Parts** followed by **Convert Placeholder Items** from the menu bar.

   ![](media/garagehive-placeholder-item9.png)

2. Scroll right to the **Action** column, and click on **Select Item**. Select the item from the **Items** List, and click **OK**.

   ![](media/garagehive-placeholder-item10.png)

3. Repeat step **2** for all placeholder items.


{% include tip.html title="Note" text="It is not possible to post a document with a Placeholder Item; it must be converted into an inventory item." %}


[Go back to top](#top)