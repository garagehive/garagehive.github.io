---
layout: docs
title: Managing Key Numbers in Garage Hive
---

<a name="top"></a>

# Managing Key Numbers in Garage Hive

The system's key numbers functionality is used to reference the vehicle key numbers with the jobsheet. This ensures that the technicians can quickly and easily focus on incoming jobs without being disrupted in their workflow. The system allows you to match the vehicle key number to the jobsheet for the vehicle.

## In this article

1. [Enabling Key Numbers Functionality](#enabling-key-numbers-functionality)
2. [How to Use Key Numbers from the Jobsheet](#how-to-use-key-numbers-from-the-jobsheet)
3. [How to Use Key Numbers from the Purchase Order](#how-to-use-key-numbers-from-the-purchase-order)

### Enabling Key Numbers Functionality
Normally, the **Key Tag Text** at the **General** FastTab is the only field on the jobsheet; however, when the key numbers functionality is enabled, a new field **Key Tag No.** is added.

![](media/garagehive-managing-key-numbers1.png)

To enable the key numbers functionality, follow these steps:
1. Choose the ![](media/search_icon.png) icon in the top-right corner, enter **Service Mgt. Setup GH**, and select the related link.
2. Scroll down to **Use Key Tag Catalogue** field and select the slider to enable it.

   ![](media/garagehive-managing-key-numbers2.gif)

3. When the **Use Key Tag Catalogue** field is enabled, the **Key Tag No.** field is added to the jobsheet.

   ![](media/garagehive-managing-key-numbers3.png)

4. From the **Service Mgt. Setup GH** page, there is a **Use Parts Bin Catalogue** field below the **Use Key Tag Catalogue** field, with two drop-down options, **No** and **Use Key Tags**.
5. If you select **No**, the key tags feature will not be added to the purchase order; however, if you select **Use Key Tags**, the same numbering used for key tags will be used for parts bins.
6. In this case, we'll select **No**. When the garage has the same number of key tags as the parts bins, the **Use Key Tags** option is appropriate.

   ![](media/garagehive-managing-key-numbers4.gif)

{% include tip.html title="Note" text="In the future, the Parts Bin feature will be developed independently to accommodate garages with more bins than key tags." %}


[Go back to top](#top)

### How to Use Key Numbers from the Jobsheet
To begin using the **Key Tag No.** field, ensure that you have added all of the key numbers from the key tags list that you have in your garage. To accomplish this, follow these steps:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Key Tags** and select the related link.
2. The window that appears displays a list of all the key tags that have already been added, along with the details of where they have been assigned.
3. You can add to the list of key tags that you already have.

   ![](media/garagehive-managing-key-numbers5.gif)

3. The list you added now appears as a drop-down menu in the jobsheet's **Key Tag No.** field.

   ![](media/garagehive-managing-key-numbers6.gif)   

4. When the vehicle arrives, it is easier to assign a key number to the jobsheet. If you select the **Vehicle on Site** slider, the system prompts you to assign a key number to the jobsheet.

   ![](media/garagehive-managing-key-numbers7.gif)

5. If the vehicle has not yet arrived, you can reserve a key number for when it arrives.

   ![](media/garagehive-managing-key-numbers8.gif)

6. When the job on the vehicle has been completed and the vehicle is no longer on site, you must post the jobsheet. When you post the jobsheet, the system prompts you to deallocate the key number. The jobsheet cannot be posted with the key number assigned.

   ![](media/garagehive-managing-key-numbers9.gif)

{% include tip.html title="Note" text="A key number cannot be assigned to more than one jobsheet; doing so will result in an error from the system." %}


[Go back to top](#top)

### How to Use Key Numbers from the Purchase Order
If the **Use Key Tags** option is selected on the **Service Mgt. Setup GH** page under the **Use Parts Bin Catalogue** field, the key numbers functionality can be used in purchase orders. When this option is enabled, the purchase order will include the field **Jobsheet Key Tag No.**.

![](media/garagehive-managing-key-numbers10.gif)

As a result, the **Jobsheet Key Tag No.** field displays the linked jobsheet's key number; therefore, the service advisor will be able to determine which parts bin the parts being ordered will be placed in.

![](media/garagehive-managing-key-numbers11.png)

If the vehicle has not yet arrived and the jobsheet is available, you can assign a key number from the purchase order by first linking the purchase order to the jobsheet, then clicking the ellipsis (...) at the end of the **Jobsheet Key Tag No.** field and selecting the key number.

![](media/garagehive-managing-key-numbers12.gif)


[Go back to top](#top)
