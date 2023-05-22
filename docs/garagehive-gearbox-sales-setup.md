---
layout: docs
title: Gearbox Sales Setup
---

# Gearbox Sales Setup
To start using the **Gearbox Sales** module, there is some setup required in the **Vehicle Sales Setup** Page.
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Vehicle Sales Setup**, and select the related link.

   ![](media/garagehive-gearbox-sales-setup1.gif)

1. Scroll down to the **Advanced** FastTab. Create a new **Default Internal Vendor No.** with the following setup:

   | No.                 | Name                         | General Bus. Posting Group | VAT Bus. Posting Group | Vendor Posting Group |
   | :------------------ | :--------------------------- | :------------------------- | :--------------------- | :------------------- |
   | INTERNALGEARBOXPREP | Internal Gearbox Preparation | VEHSALES                   | INTERNAL               | VEHSALES             |


   ![](media/garagehive-gearbox-sales-setup2.gif)

1. Create a new payment method in the **Payment Method Code** field with the code **GEARBOXPRP**, Description **Gearbox Prep**, Bal. Account Type **G/L Account**, and Bal Account No. **2902**. 

   ![](media/garagehive-gearbox-sales-setup3.gif)

1. After creating the vendor as described above, add the vendor to the **Default Internal Vendor No.** field.

   ![](media/garagehive-gearbox-sales-setup4.png)

1. Now create a new **Default Internal Customer No.** with the following setup:

   | No.                 | Name                         | General Bus. Posting Group | VAT Bus. Posting Group | Customer Posting Group | Promote Sell-to Cust. on Invoice |
   | :------------------ | :--------------------------- | :------------------------- | :--------------------- | :--------------------- | :------------------------------- |
   | INTERNALGEARBOXPREP | Internal Gearbox Preparation | VEHSALES                   | INTERNAL               | VEHSALES               | Enable                           |


   ![](media/garagehive-gearbox-sales-setup5.gif)

1. Select the **Service Recharge Item Charge No.** field and add a new one with the **No.** as **GEARBOXPREP**, the **Description** as **Gearbox Sales Preparation**, and the **Gen. Prod. Posting Group** as **VEHSALES**.

   ![](media/garagehive-gearbox-sales-setup6.gif)

1. Add the **Corresponding Vendor No.** as the vendor that you created in the **Default Internal Vendor No.** field above.

   ![](media/garagehive-gearbox-sales-setup7.gif)

1. Create a new **Service Type** in the field **Recharge Invoice Service Type**, with the code **GEARBOXES**, Description as **Gearboxes**, and the Group Code as **Repairs**.

   ![](media/garagehive-gearbox-sales-setup8.gif)
   
1.  Add the new customer card to the **Default Internal Customer No.** field.

   ![](media/garagehive-gearbox-sales-setup9.png)

1. Create a new **Default Vehicle No.** with the **No.**, **Reg. No.**, **VIN**, **Make**, and **Model** fields set to **Gearbox**. Make sure to add a new Make and Model, as it will give you an error if it is not found in the system.

   ![](media/garagehive-gearbox-sales-setup10.gif)

1.  Enable the **Gearbox Actions in Sales Invoice** slider.

   ![](media/garagehive-gearbox-sales-setup11.png)

1.  Set the **Default Jobsheet Service Type** as the **Gearbox**, the one you created above.

   ![](media/garagehive-gearbox-sales-setup12.png)

1.  The **Default Jobsheet Comment Type** can be any that you want to use; in this case we'll use **OFFICE**.

   ![](media/garagehive-gearbox-sales-setup13.png)

1.  For the **Template Item Category Code** you'll have to create a new **Item Category**. Search for **Item Categories** In the top right corner ![](media/search_icon.png) icon.

   ![](media/garagehive-gearbox-sales-setup14.png)

1.  Select **New** and create a category called **GEARBOXES** and the description to be **Gearboxes** as well. Exit the **Item Category Card** page.

   ![](media/garagehive-gearbox-sales-setup15.gif)

1.  Select **Create Item Template** on the **Item Categories** page, enter the **Example Template Code** as **Vehicle Sales**, the **New Template Code** as **Gearboxes**, the **New Template Description** as **Gearbox Sales**, and the **Item Category Code** search for the one you just created, **GEARBOXES**. Click the **OK** button.

   ![](media/garagehive-gearbox-sales-setup16.gif)

1.  Exit the **Item Categories** page, and enter the **Item Category Code** that you have just created, in the **Template Item Category Code**.

   ![](media/garagehive-gearbox-sales-setup16.gif)

1. Scroll down to the **Number Series** FastTab and create a new number series for the **Gearboxes** in the **Gearbox Item Nos.** field. Select **New** on the **No. Series List** page, enter **Code** as **GEARBOXES**, and **Description** as **GEARBOXES**.
1. Click on the **Starting number** field and enter the **Starting Date** as today's date and the **Starting Number** as **00001**. To add the number series, click the **Close** and **OK** buttons.

   ![](media/garagehive-gearbox-sales-setup17.gif)

1. Scroll up to the **General** FastTab and select the **Enable** slider to enable the setup in the system.

   ![](media/garagehive-gearbox-sales-setup18.png)


[Go back to top](#top)