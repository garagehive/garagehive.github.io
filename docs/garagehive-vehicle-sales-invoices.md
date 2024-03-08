---
layout: docs
title: Using Vehicle Sales Invoices
---

## Using the Vehicle Sales Invoices
Vehicle Sales Invoice is the invoice created in the system when the customer confirms the purchase of the vehicle. There are several types of invoices used for vehicle sales:

   - **Deposit Invoice** - This is created for the deposit given for the vehicle.
   - **Finance Invoice** - This is created for the finance company, when the payment is made by the finance company.
   - **Customer Invoice** - This is created for the customer, for the remaining amount that they will pay.
   - **Finance Balancing Invoice** - This is created for system requirements. It exists to keep the system's books balanced; it may not be printed and will always have a zero value.

The type of invoice is indicated in the **Vehicle Sales Invoice Type** column of the sales invoices list.

   ![](media/garagehive-vehicle-sales-invoice1.png)

### Deposit Invoice
1. When a customer makes a deposit toward the purchase of a vehicle, a **Deposit Invoice** is generated. To create the **Vehicle Sales Invoice** from the **Vehicle Sales Order**, select **Actions** from the menu bar and then **Create Sales Invoice**.

   ![](media/garagehive-vehicle-sales-invoice2.png)

2. You get the option of creating either the **Deposit Invoice** or create **All Invoices (Including Deposit)**.

   ![](media/garagehive-vehicle-sales-invoice3.png)

3. The Deposit Invoice will only include the **Deposit Amount** in the **Lines** FastTab, to show the amount that has been deposited.

   ![](media/garagehive-vehicle-sales-invoice4.png)

   ![](media/garagehive-vehicle-sales-invoice5.png)

### Finance Invoice
1. The **Finance Invoice** is generated when the option **All Invoices (Including Deposit)** is selected, and when the **Source of Payment** is **Finance Company** in the **Vehicle Sales Order**.

   ![](media/garagehive-vehicle-sales-invoice3.png)

2. The **Finance Invoice** shows the **Deposit Amount**, the **Customer Payment** and the cost the vehicle in the **Lines** FastTab.

   ![](media/garagehive-vehicle-sales-invoice6.png)

3. When printed both the **Customer** and the **Finance Company** are indicated.

   ![](media/garagehive-vehicle-sales-invoice7.png)

### Customer Invoice
1. The customer invoice is also generated when the option **All Invoices (Including Deposit)** is selected, and when the **Source of Payment** is **Customer** in the **Vehicle Sales Order**.
2. It shows the cost of the vehicle being sold, the **Deposit Amount**, the **Financed Amount**, the **Part Exchange** vehicle (if available) and the **Addons** that have bee added to the vehicle.

   ![](media/garagehive-vehicle-sales-invoice8.png)

3. A comment is added in the printed **Customer Invoice** when the vehicle is partially paid by the **Finance Company**, to show what has been agreed on the financing.

   ![](media/garagehive-vehicle-sales-invoice9.png)

### Finance Balancing Invoice
1. As the name suggests, this invoice is solely used for balancing the accounts in the system and it shows the cost of the vehicle, **Deposit Amount**, **Customer Payment**, and the **Financed Amount** which all amount to zero.

   ![](media/garagehive-vehicle-sales-invoice10.png)

   ![](media/garagehive-vehicle-sales-invoice10a.png)


{% include tip.html title="Note" text="After the deal is done, all the invoices should be posted." %}

### Posting All the Invoices
1. To post all of the invoices at once, open the list of **Vehicle Sales Invoices**, select the dots next to the **No.** of any of the invoices, and click **Select More**.
2. Select all of the invoices you want to post at once.

   ![](media/garagehive-vehicle-sales-invoice11.png)

   ![](media/garagehive-vehicle-sales-invoice12.png)

3. Choose **Posting** and **Post Batch** from the menu bar. This will post all of the selected invoices at once.

   ![](media/garagehive-vehicle-sales-invoice13.png)

4. On the page that opens, enter the dates as today's date and click **OK**.

   ![](media/garagehive-vehicle-sales-invoice14.png)
   

<br>

### **See Also**
[Recommended Vehicle Sales Setup](garagehive-vehicle-sales-setup.html){:target="_blank"} \
[Using Vehicle Sales Order](garagehive-vehicle-sales-order.html){:target="_blank"}