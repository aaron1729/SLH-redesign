This audit report identifies the content gaps, structural differences, and messaging shifts between the original **Saint Louise House (SLH)** website and your **Vercel prototype**.

You can feed this directly into a coding assistant (like Cursor, Claude, or GitHub Copilot) to bridge the gap.

---

### **Audit Report: Saint Louise House Content Alignment**

**Goal:** Synchronize the new prototype with the latest mission data, statistics, and organizational history from the live site.

#### **1. Header & Navigation Structure**

* **Current Prototype:** Likely uses generic placeholder links.
* **Live Site Requirement:**
* **About Us:** Needs sub-pages for *Who We Are*, *Mission & Strategy*, *Who We Serve*, *Leadership*, and *Community Partners*.
* **Services:** Should be a primary landing page explaining the "Wraparound" model.
* **Get Involved:** Needs links for *Donate*, *Events*, *Volunteer*, *In-kind Donations*, and *Legacy Circle*.
* **Blog/News:** Ensure the "Saint Louise House Blog" is accessible.



#### **2. Hero & Impact Statistics (Update Required)**

The prototype should reflect the current cumulative impact data found on the live site’s home and mission pages:

* **Total Families Served:** 270+ (since founding).
* **Total Children Served:** 574+.
* **Success Metrics:** * **98%** of children move to the next grade level.
* **93%** of mothers increase self-sufficiency.
* **90%+** of families maintain long-term stability after graduation.



#### **3. Core Messaging & Definitions**

Ensure the following specific terms and definitions are used to maintain brand consistency:

* **"The Hidden Homeless":** This is a key thematic pillar for SLH. The content must explain that women-led families often sleep in cars, hotels, or on sofas to avoid losing their children to the system.
* **"Two-Generational Approach":** Explicitly mention that services are designed for both the mother and the child simultaneously to break the cycle of poverty.
* **"Empowerment Partners":** The new site should refer to case managers as "Empowerment Partners" (the live site's specific terminology for their licensed social workers).

#### **4. Service Model Details (The "Wraparound" Content)**

The prototype needs specific sections for these four pillars:

1. **Stable Housing:** Deeply affordable, fully furnished two-bedroom apartments.
2. **Financial Literacy:** Using the *Consumer Financial Protection Board’s "Your Money, Your Goals"* curriculum.
3. **Parenting Support:** Using the *Nurturing Parenting* curriculum.
4. **Children’s Services:** Social-emotional learning, tutoring, and extracurricular support.

#### **5. Strategic "Giving Circles" (New for Sustainment)**

The live site (specifically `/sustain2/`) uses a tiered donor model that should be mirrored in the new design:

* **Safe Keeper Circle:** $1,000+ annually.
* **Hope Builder Circle:** $5,000+ annually.
* **Change Maker Circle:** $15,000+ annually.

#### **6. Missing Pages/Components to Add**

* **The History/Founding Story:** The prototype should include the 25-year history (founded in 2000 by Saint Austin Catholic Parish and the Daughters of Charity).
* **Agency Referrals:** A list of partners (Caritas, American Gateways, etc.) for families who don't qualify for SLH housing.
* **Contact Info:** * **Mailing:** P.O. Box 150637, Austin, TX 78715.
* **Admin Phone:** 512.302.0027.
* **Program Phone:** 512.326.2774.



---

### **Instructions for Coding Assistant**

* "Using the audit report above, update the `About` page component to include the 'Hidden Homeless' narrative."
* "Update the `Stats` section on the homepage with the 98% grade-level and 93% self-sufficiency figures."
* "Create a `GivingCircles` component with three cards for Safe Keeper, Hope Builder, and Change Maker levels."
* "Ensure the footer includes both the Administrative and Program office phone numbers."

---

### CONTENT

Instructions for AI Developer: Use the text blocks below to replace all placeholder text in the Vercel prototype. Maintain the exact wording provided to ensure compliance with the nonprofit’s branding and messaging.

1. Core Identity & Mission
Mission Statement:

"Saint Louise House is a nonprofit organization dedicated to the success of women and their children moving from homelessness to healthy independent lives. We strive to empower women and their children to overcome homelessness for generations to come. Our proven program provides stable housing and wraparound services with highly-individualized support that fosters education, financial literacy, strong family relationships and healthy living, leading to a lifetime of self-sufficiency."

The "Hidden Homeless" Narrative (For 'About Us' or 'The Need' section):

"Women and children are Austin’s true hidden homeless. In an effort to keep children off the streets and out of sight, women-led families—often fleeing domestic abuse—find themselves bouncing from temporary shelter to shelter, sofa-surfing, and sleeping in cars or hotels. Without safe and stable housing, mothers cannot focus on the steps necessary to pull themselves and their children out of crisis and overcome economic insecurity."

Organizational Values:

Empowerment

Hope

Growth Mindset

Commitment

Humility

Effectiveness

2. Impact Statistics (Verified Data)
Total Families Served: 270+

Total Children Served: 574+

Grade Level Success: 98% of school-aged children graduate to the next grade level.

Self-Sufficiency: 93% of mothers increase their self-sufficiency scores while in the program.

Housing Stability: 100% of families who graduate the program move into stable, permanent housing.

Education/Employment: 100% of mothers are dedicated to working or pursuing additional education.

3. The Service Model (The "Wraparound" Content)
Component 1: Stable Housing

"Stable housing is the key to economic security. Saint Louise House provides 40 families with fully-furnished, two-bedroom apartments with rents starting at $50 a month. Families graduate from Saint Louise House taking everything in the apartment with them, ensuring a seamless transition to their new independent lives."

Component 2: Empowerment Partnership

"Empowerment Partners are licensed social workers who walk alongside each family. Through weekly meetings, they help families identify their own strengths and connect them to resources for reaching employment, education, parenting, and financial goals."

Component 3: Wraparound Services

"We provide highly individualized support for meeting basic needs. Services include life skills workshops (using the 'Your Money, Your Goals' and 'Nurturing Parenting' curricula), children’s activities for social-emotional development, a food pantry, bus passes, and flexible funds for emergencies."

4. Giving Circles (Donor Tiers)
Safe Keeper Circle ($1,000+ annually): "Your contributions provide essential services and secure housing for families starting their journey toward stability."

Hope Builder Circle ($5,000+ annually): "Enable families to envision and work towards a brighter future with access to resources that foster personal growth."

Change Maker Circle ($15,000+ annually): "Offer comprehensive support that guides families through the complete transformation from crisis to self-sufficiency."

5. Get Involved (Volunteer Roles)
Birthday Cakes: "Make every mother and child feel special on their birthday by providing a personalized cake."

Community Meals: "Support family participation in workshops by providing a meal for 25 people to share together beforehand."

Product Drives: "Coordinate a drive for toiletries, laundry detergent, and cleaning supplies for our on-site pantry."

Translation: "Help us meet families where they are by providing Spanish translation for documents and applications."

6. Contact & Footer Details
Mailing Address: P.O. Box 150637, Austin, TX 78715

Administrative Offices Phone: 512.302.0027

Program Office & Housing Info: 512.326.2774

General Inquiry Email: info@saintlouisehouse.org

Tax ID (EIN): 74-2968167

Legal Name: VinCare Services of Austin Foundation

7. Program Eligibility (For "Apply" Page)
"Saint Louise House is not an emergency shelter. We offer long-term supportive housing to single mothers with children who are ready to set goals and work toward economic stability. Applicants must provide proof of income (if any), photo ID, birth certificates, Social Security cards, and immunization records for children. All applicants must complete a criminal background check and observed drug test prior to move-in."