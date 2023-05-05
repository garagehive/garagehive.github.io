---
layout: docs
title: Automatic Sales Price, Sales Markup, and Sales Discount Calculations
---

<a name="top"></a>

# Automatic Price, Markup, and Discount Calculations 

When a company needs to use a specific price, markup, or discount for a particular product, Garage Hive gives the possibility to do so, and even set specific filters, such as location, make, and vehicle age. These prices, markups, and discounts supersede the standard prices available in an item or labour card.

## In this article

1. [Automatic sales prices calculations](#automatic-sales-prices-calculations)
2. [Automatic sales markups calculations](#automatic-sales-markups-calculations)
3. [Automatic sales discounts calculations](#automatic-sales-discounts-calculations)

### Automatic sales prices calculations
To specify sales price for specific product(s):
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Sales Prices V16**, and choose the related link. V16 is an abbreviation for Version 16, which was the version when this feature was released.

   ![](media/garagehive-automatic-pricing1.gif)

1. There are three statuses on the **Sales Prices V16** page lines:
- **Draft:** For use when you want to edit the lines.
- **Active:** For use when you want to go live with the prices.
- **Inactive:** For use when you want to disable and archive the line.

   Choose **Draft** status when editing the lines.

   ![](media/garagehive-automatic-pricing2.png)

1. On the lines, specify the **Applies-to Type**, and **Applies-to No.** which defines who the price should apply to.
1. Then add the **Product Type**, and the **Product No.** which determines what product the price should apply to. 
1. In this case, we'll set the **Applies-to Type** as **All Customers** (no need to add **Applies-to No.** as all customers customers are covered), **Product Type** as **Labour**, and the **Product No.** as **LAB- Standard Labour Rate**.

   ![](media/garagehive-automatic-pricing3.gif)

1. There are several filters that you can use, to be more specific when applying the prices. You can specify the **Location Code**, **Make Code** or **Primary Make Code** for the price.

   ![](media/garagehive-automatic-pricing03.gif)

1. You can also use the **Minimum Vehicle Age** and **Maximum Vehicle Age** to filter on how to apply the price according to the age of the vehicle. The vehicle age is calculated from the **Vehicle First Registration Date** field in the **Vehicle** card.

   ![](media/garagehive-automatic-pricing4.gif)

1. Add the **Starting Date** and **Ending Date** for the price, which means the price will only be valid for the specified period (this is optional).

   ![](media/garagehive-automatic-pricing5.gif)

1. Enter the **Unit of Measure Code** (if you use **Product Type** as **Item** or **Resource**) for the **Product No.** you selected (where applicable), followed by the **Minimum Quantity** to apply the price and the **Unit Price** to use.
1. You can also specify other fields such as **Allow Line Disc.**, which means that this price can be used with the discount in the document lines, **Price Includes VAT**, which means that the price includes VAT.

   ![](media/garagehive-automatic-pricing6.gif)
   <br>
   ![](media/garagehive-automatic-pricing7.png)

1. When done editing, make the status to be **Active** from the first column.

   ![](media/garagehive-automatic-pricing8.gif)

1. The prices set up will now be active for use.

[Go back to top](#top)

### Automatic sales markups calculations
To specify sales markup for specific product(s):
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Sales Markups V16**, and choose the related link.

   ![](media/garagehive-automatic-markups1.gif)

1. Choose **Draft** status when editing the lines. 
1. On the lines, specify the **Applies-to Type**, and **Applies-to No.** which defines who the markup should apply to.
1. Then add the **Product Type**, and the **Product No.** which determines what product the markup should apply to. 
1. In this case, we'll set the **Applies-to Type** as **All Customers**, **Product Type** as **Item Category**, and the **Product No.** as **Filters - Filtration**.

   ![](media/garagehive-automatic-markups2.gif)

1. There are several filters that you can use, to be more specific of how to apply the markup. You can specify the **Location Code**, **Make Code** or **Primary Make Code** for the markup.

   ![](media/garagehive-automatic-markups02.gif)

1. You can also use the **Minimum Vehicle Age** and **Maximum Vehicle Age** to filter on how to apply the price according to the age of the vehicle. The vehicle age is calculated from the **Vehicle First Registration Date** field in the **Vehicle** card.

   ![](media/garagehive-automatic-markups3.gif)

1. Add the **Starting Date** and **Ending Date** for the markup, which means the markup will only be valid for the specified period (this is optional).

   ![](media/garagehive-automatic-markups4.gif)

1. Enter the **Minimum Quantity**, **Minimum Unit Cost** and **Maximum Unit Cost** to apply the sales markup (this is also optional).

   ![](media/garagehive-automatic-markups5.gif)

1. Add the **Markup Type** to be either **Amount** or **Percent**, the **Markup Base** to be either **Unit Cost** (which is the unit cost in related purchase item ledger entries or Item card) or **Unit Cost in Document** (which is the unit cost in the document line).
1. Specify the **Markup Value** depending on the **Markup Type** you used. In this case, we'll use a **30% markup value for unit cost**.

   ![](media/garagehive-automatic-markups6.gif)

1. You can also specify other fields, such as **Minimum Markup Amount**, which means that the markup amount should not be less than this amount, and **Allow Line Discount**, which means that the line discount in the document can be used for the price after the markup is set.

   ![](media/garagehive-automatic-markups7.png)

1. Set the status to **Active** in the first column.
1. The markups set up will now be active for use.

[Go back to top](#top)

### Automatic sales discounts calculations
To specify sales markup for specific item(s) or labour(s):
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Sales Discounts V16**, and choose the related link.

   ![](media/garagehive-automatic-discounts1.gif)

1. Choose **Draft** status when editing the lines. 
1. On the lines, specify the **Applies-to Type**, and **Applies-to No.** which defines who the discounts should apply to.
1. Then add the **Product Type**, and the **Product No.** which determines what product the discounts should apply to. 
1. In this case, we'll set the **Applies-to Type** as **Customer Category**, **Applies-to No.** as **Retail**, **Product Type** as **Item Category**, and the **Product No.** as **Fluids - Fluids, Oils & Anti-Freeze**.

   ![](media/garagehive-automatic-discounts2.gif)

1. There are several filters that you can use, to be more specific of how to apply the discounts. You can specify the **Location Code**, **Make Code** or **Primary Make Code** for the markup.

   ![](media/garagehive-automatic-discounts3.gif)

1. You can also use the **Minimum Vehicle Age** and **Maximum Vehicle Age** to filter on how to apply the price according to the age of the vehicle. The vehicle age is calculated from the **Vehicle First Registration Date** field in the **Vehicle** card.

   ![](media/garagehive-automatic-discounts4.gif)

1. Add the **Starting Date** and **Ending Date** for the discount, which means the discount will only be valid for the specified period (this is optional).
1. Enter the **Unit of Measure Code** (if need be), and the **Line Discount %** to offer, in percentage.

   ![](media/garagehive-automatic-discounts5.gif)

1. Set the status to **Active** in the first column.
1. The discounts set up will now be active for use.

<br>

{% include tip.html title="Note" text="This may be a little bit complicated setup, but if you have any questions, please get in touch with our support team." %}


[Go back to top](#top)