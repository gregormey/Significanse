# Significanse
A Goolge Chorme extension that opens https://abtestguide.com/calc/ from a google analytics goal conversion overview report.

# How it works
The extension requires two segments and grabs the goal completions as well as the goal conversion rate of the first two segements and cacluates the impressions. 

Impressions and conversions are then passed as GET paramters to https://abtestguide.com/calc/ and opens it in a new tab. The first segment is always the A version.  
