---
layout: docs
title: Creating a Purchase Return Order and Purchase Credit Memo
---

# Creating a Purchase Return Order and Purchase Credit Memo
Purchase return orders are documents that you use to manage and track all of your returns. They facilitate you in tracking items you ship back to the supplier and receiving a credit memo when the supplier processes them.

## In this article+

1. [Shipping and Invoicing Parts in a Purchase Return Order with a One Credit Memo from the Supplier](#shipping-and-invoicing-parts-in-a-purchase-return-order-with-a-one-credit-memo-from-the-supplier)
2. [Shipping and Invoicing Parts in a Purchase Return Order with More than one Credit Memo from the Supplier](#shipping-and-invoicing-parts-in-a-purchase-return-order-with-more-than-one-credit-memo-from-the-supplier)
3. [Creating a Purchase Credit Memo when Parts have been shipped and credit note does not match Purchase Return Order](#creating-a-purchase-credit-memo-when-parts-have-been-shipped-and-credit-note-does-not-match-purchase-return-order)


### Shipping and Invoicing Parts in a Purchase Return Order with a One Credit Memo from the Supplier
1. From the role centre navigation menu, click on **Purchasing** and then select **Purchase Return Orders**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice1.png)

2. Click on **New** to create a new purchase return order.
3. Enter the vendor name in the **Vendor Name** field and the items to return in the **Lines** sub-page.

   ![](media/garagehive-purchase-return-order-ship-and-invoice2.png)

4. When the purchase return order is created, the items must be returned to the supplier for a credit memo to be processed. Select **Posting** from the actions bar and then select **Post** from the submenus.

   ![](media/garagehive-purchase-return-order-ship-and-invoice3.png)

5. You have three options in the pop-up menu: **Ship**, **Invoice**, and **Ship and Invoice**. Select **Ship** and click **OK** while you wait for the supplier's credit memo. This indicates that the items have been returned to the supplier, and you are now awaiting a credit memo from the supplier.

   ![](media/garagehive-purchase-return-order-ship-and-invoice4.png)

6. After receiving a credit memo from the supplier, enter all the details on the credit memo in the purchase return order and ensure they match; the **Document Date**, **Vendor Cr. Memo No.**, and the **Line Amounts**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice5.png)

7. Click on **Posting** from the actions bar and then select **Post** from the submenus.
+8. Select **Invoice** from the three options and click **OK**. This posts the purchase return order to update the relevant ledger accounts and balance the stock levels.

   ![](media/garagehive-purchase-return-order-ship-and-invoice6.png)


### Shipping and Invoicing Parts in a Purchase Return Order with More than one Credit Memo from the Supplier
The Garage Hive system allows you to ship and invoice parts from a single **Purchase Return Order** at for parts with different Credit Memo from the supplier. Here is the procedure:
1. Open the Purchase Return Order with the parts that have two different Credit Memos from the supplier. Scroll down to the **Lines** sub-page.
1. Take note of the columns **Quantity**, **Return Qty. to Ship**, **Return Qty. Shipped**, **Qty to Invoice** and **Qty Invoiced**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice7.png)

1. When you enter a value in the **Quantity** column, the **Return Qty. to Ship** and **Qty. to Invoice** columns are automatically filled in, but you can edit them.
1. To **Ship** some parts, for example, delete the value from the **Return Qty. to Ship** column in the Purchase Return Order for the parts you don't want to ship.
1. Then select **Posting**, followed by **Post** in the actions bar. Select **Ship** from the options in the pop-up menu and click **OK**.
1. The number of items shipped is recorded in the column **Return Qty. Shipped**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice8.gif)

1. When the other items are ready to ship, repeat step **5**.
1. After shipping the parts, you may receive different Credit Memos for the parts on the Purchase Return Order. You must invoice separately for each Credit Memo parts.
1. Enter the **Vendor Cr. Memo No.** for one of the Credit Memos, then scroll down to the **Lines** sub-page and delete the value of column **Qty to Invoice** for the parts that are not in the Credit Memo to invoice.
1. Then select **Posting**, followed by **Post** in the actions bar. Select **Invoice** from the options in the pop-up menu and click **OK**.
1. The number of items on the Credit Memo are invoiced and recorded in the column **Qty Invoiced**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice9.gif)

1. After you've invoiced one of the Credit Memos, delete its number from the **Vendor Cr. Memo No.** field. Take the other Credit Memo and enter its number in the **Vendor Cr. Memo No.** field. Confirm the **Qty. to Invoice** column contains the correct values that correspond to the credit memo, then select **Posting** followed by **Post** from the actions bar.
1. Select **Invoice** from the options in the pop-up menu and click **OK**.

   ![](media/garagehive-purchase-return-order-ship-and-invoice10.gif)

1. If there are no more parts to invoice, the Purchase Return Order will disappear, and a Purchase Credit Memo will be created.

### Creating a Purchase Credit Memo when Parts have been shipped and credit note does not match Purchase Return Order 
There are several ways in which to post a purchase return order after the parts have been shipped. 

Firstly, if the credit note matches the parts within the purchase return order, you can simply, Post, Ship and Invoice. 

Alternatively, if the parts shipped come back on two different credit notes, use the following steps: - 

*   From the home screen select the **Purchasing** button followed by **Purchase Cr.Memos**. 

![](media/garagehive-shipped-items-purchase-return-order10.png)

*   Select **+ new**

![](media/garagehive-shipped-items-purchase-return-order11.png)

*   Fill in Vendor Name. 

![](media/garagehive-shipped-items-purchase-return-order12.png)

*   Within the Lines section of the Purchase Credit Memo, ensure **More Options** is selected. 

*   Select **Functions** followed by **Get Return Shipment Lines**.  

![](media/garagehive-shipped-items-purchase-return-order13.png)

*   Find the relevant parts from the pop up box and select **Ok**.<br> 
        -   Repeat this step for each item on the Vendor Invoice.

![](media/garagehive-shipped-items-purchase-return-order14.png)

*  This will add all the parts onto the Purchase Credit Memo. 

![](media/garagehive-shipped-items-purchase-return-order15.png)

*  Once you have all of the parts from the Credit Note from your supplier on the Purchase Credit Memo. Select **Posting** followed by **Post**.  

![](media/garagehive-shipped-items-purchase-return-order16.png)

*   You will then see a pop up asking "Do you want to post the credit memo"  -  **Select Yes**

![](media/garagehive-shipped-items-purchase-return-order8.png)

*   Another pop up will appear - **Select No**

![](media/garagehive-shipped-items-purchase-return-order17.png)






