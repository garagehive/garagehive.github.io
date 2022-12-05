---
layout: docs
title: How to Create Warranty Job in Garage Hive 
---

## How to Create Warranty Job

{% include tip.html title="Note" text="There are several other ways to create warranty job, but this is a common method." %}


## Scenario
You purchased a clutch, fitted it in the customer's vehicle, charged the customer, and then the clutch failed. You must now replace the clutch, but you will not do so for free; your parts supplier will pay the bill. That is, you are doing a warranty job for the customer, but your parts supplier is paying the bill.


Here is the process for creating a warranty job:
1. Create a Jobsheet as normal, but at the bottom add the vendor's name as the **Bill-to Customer** and add the **Payment Terms Code**. Create a customer name from the vendor name to use.

   ![](media/garagehive-job-warranty1.png)

2. Send the invoice to the supplier and make sure you agree on the amount for parts and labour. This is important because it will determine how much the supplier will do on the credit note.
3. After you've agreed on the amounts, have the supplier issue a credit note for the amount on the invoice you sent them. Of course, if there were any changes to be made, you have already made them and resent the invoice to the supplier.
4. The Front of House/Service Advisor will now post the Jobsheet **when the credit note is received and matches the amount on the Jobsheet**. If there are any discrepancies, follow-up with the supplier is required, and the Jobsheet **cannot** be posted until the credit note matches the amount on the Jobsheet.

   ![](media/garagehive-job-warranty2.png)

5. The Front of House/Service Advisor will now send all documentation to the accounts department.

   {% include tip.html title="Note" text="Do not post the Credit Note because the Jobsheet has already been posted and you cannot have both in the system." %}

6. The Accounts department will now perform the **Customer/Vendor Balancing Payments (also known as Contra Payments)**. For this posting, the accounts will post the two journals as follows:   
      - **Line 1** - Customer: choose the Applies-to Doc No. as the supplier posted invoice, enter the Credit Note No. as the Document No., and assign to **GL 2998 Suspense**.
      - **Line 2** - Vendor: choose the Applies-to Doc No. as the purchase invoice for the item fitted, Make an opposite value and use the Credit Note No. as the Document No.

         ![](media/garagehive-job-warranty3.png)

 Please read about the **Contra Payments** and how to do it [here](garagegaragehive-contra-payment.html){:target="_blank"}.
