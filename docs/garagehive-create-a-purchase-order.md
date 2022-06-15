---
layout: docs
title: How to Create Purchase Orders in Garage Hive
---

# How to Create Purchase Orders in Garage Hive
There are two ways to create a **Purchase Order** in Garage Hive:
1. [Directly from a Jobsheet](#creating-a-purchase-order-directly-from-a-jobsheet)
2. [From the home screen](#creating-a-purchase-order-from-the-home-screen)

### Creating a Purchase Order directly from a Jobsheet
To create a purchase order directly from a Jobsheet:
<br>

**Option 1**
1. Open the relevant Jobsheet and scroll down to the **Lines** FastTab.
2. Select the **Type** column as **Item** and, if you know the part number or the item is in stock, start typing the part number or description in the **No.** column. 
3. Use a **Placeholder Item** number, such as **MISC**, for items that you don't know the part number. This will be the placeholder part number until you receive the items.
4. Enter the quantity to be ordered in the **Quantity** column.

   ![](media/garagehive-creating-a-purchase-order1.gif)

5. Enter the supplier name to order from in the **Vendor No.** column and select from the list. If there are several parts from the same supplier, enter the same supplier in all the item lines.
6. If, on the other hand, some items are from a different supplier, enter the relevant supplier name in the **Vendor No.** column. This creates separate purchase orders for the different suppliers.
7. Select the **Purchase (Special)** checkbox column on all item lines that need to be ordered, even if they are from different suppliers.
   
   ![](media/garagehive-creating-a-purchase-order2.gif)

8. Select **Parts** from the actions bar, then **Create Purchase Order(s)**. The purchase order will be created and its number will be indicated on the alert. If several suppliers are selected, an alert will be shown for each supplier.

   ![](media/garagehive-creating-a-purchase-order3.gif)

9. The Purchase Order(s) has now been created and is ready for the parts to be ordered. The next step will be to receive the parts and post the Purchase Order.
   
   ![](media/garagehive-creating-a-purchase-order4.gif)

1. If the vendor selected does not have the items, or there is a problem ordering, you can unlink the Jobsheet from the purchase order by selecting the **Unlink From Purchase Document** action under **Parts** in the actions bar, allowing you to create a new purchase order with a different supplier.
1. Delete the lines from the previously created purchase order(s).

   ![](media/garagehive-creating-a-purchase-order5.gif)

**Option 2**
1. When creating a purchase order directly from the Jobsheet, you also have the option of using the action **Confirmation Worksheet**.
2. Select **Parts** from the actions bar, then **Confirmation Worksheet**. A page with all of the parts added in the Jobsheet lines opens (excluding the labour).
3. Select the **Purchase (Special)** checkbox column on all item lines that need to be ordered on the **Parts Order Confirmation** page and enter the **Vendor No.**.
4. Select **Create Purchase Order(s)** from the actions bar when done. The Purchase Order(s) has now been created and is ready for the parts to be ordered.

   ![](media/garagehive-creating-a-purchase-order10.gif)

### Creating a Purchase Order from the home screen
This option is typically used only after the invoice has been received from the supplier. To create a Purchase Order from the home screen:
1. Select **Purchasing**, and then **Purchase Orders** from the navigation menu in the home screen.
2. Choose **New** from the **Purchase Orders** page.
3. Start typing the vendor name in the **Vendor No.** field, and select from the list. If the vendor is not available in the system you can [create a new vendor card](garagehive-create-a-vendor-card.html).
4. In the **General** FastTab, enter the invoice number in the **Vendor Invoice No.** field.

   ![](media/garagehive-creating-a-purchase-order6.gif)

5. Scroll down to the **Lines** FastTab and add the items from the supplier invoice by selecting **Item** in the **Type** column and entering the part number in the **No.** column, or [create an item card](garagehive-create-an-item-card.html) for items not in stock list.

   ![](media/garagehive-creating-a-purchase-order7.gif)

6. If you want to link the purchase order to a jobsheet, go to the **General** FastTab, then to the **Purch. Source Type** field, and choose **Jobsheet.**
7. Select the Jobsheet to link to in the **Jobsheet No.** field, which is located below the **Purch. Source Type** field.
8. Select **Special Order** from the actions bar, followed by **Add Item Lines to Jobsheet** action.

   ![](media/garagehive-creating-a-purchase-order8.gif)

9. You can now post the Purchase Order by choosing **Posting** and then **Post** from the actions bar.

   ![](media/garagehive-creating-a-purchase-order9.gif)


<br>

### **See Also**

[Video: How to Create Purchase Orders in Garage Hive](https://www.youtube.com/watch?v=CxgRuv8eTT4)




















