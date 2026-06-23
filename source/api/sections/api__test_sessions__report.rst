The **report** operation is used to retrieve a test session's report. It can be used with any test session, not only sessions launched via the Test Bed's REST API, as long as you are authorised to view them.

To call the **report** operation make an HTTP ``GET`` to path ``/api/rest/tests/report/{sessionId}``, where ``sessionId`` is replaced by the session's identifier.
As with all Test Bed REST operations for session management you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **organisation API key**.

The format of the report is by default XML, using in particular the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__ syntax.
You may also request the report in PDF, by setting the ``Accept`` HTTP header to ``application/pdf``.

Once this call is made, the Test Bed will return a response with a ``200`` (OK) status code, whose payload is the report's content. The following sample is a complete
example of such a report (in the default XML format):

.. code-block:: xml

   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
   <TestCaseOverviewReport xmlns="http://www.gitb.com/tr/v1/" xmlns:ns2="http://www.gitb.com/core/v1/" xmlns:ns3="http://www.gitb.com/tbs/v1/" id="UBL_invoice_validation_test_3">
       <metadata>
           <ns2:name>TC3: Upload minimal invoice</ns2:name>
           <ns2:description>Test case to verify the correctness of a minimal UBL invoice. The invoice is provided manually through user upload.</ns2:description>
       </metadata>
       <sessionId>6f7df938-8478-49ea-9626-97ba5d611f0e</sessionId>
       <startTime>2022-10-14T15:21:14.000+02:00</startTime>
       <endTime>2022-10-14T15:21:31.000+02:00</endTime>
       <result>FAILURE</result>
       <message>The provided invoice failed validation. Check the failed validation step(s) for further details.</message>
       <steps>
           <step id="1">
               <description>Step 1: UBL invoice upload</description>
               <report xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="TAR" id="1">
                   <date>2022-10-14T15:21:25.767+02:00</date>
                   <result>SUCCESS</result>
               </report>
           </step>
           <step id="2">
               <description>Step 2: Validate invoice against UBL 2.1 Invoice Schema</description>
               <report xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="TAR" name="XML Schema Validation" id="2">
                   <date>2022-10-14T15:21:25.853+02:00</date>
                   <result>SUCCESS</result>
                   <counters>
                       <nrOfAssertions>0</nrOfAssertions>
                       <nrOfErrors>0</nrOfErrors>
                       <nrOfWarnings>0</nrOfWarnings>
                   </counters>
                   <reports/>
               </report>
           </step>
           <step id="3">
               <description>Step 3: Validate invoice against BII2 CORE restrictions for Invoice Transaction</description>
               <report xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="TAR" name="Schematron Validation" id="3">
                   <date>2022-10-14T15:21:29.756+02:00</date>
                   <result>SUCCESS</result>
                   <counters>
                       <nrOfAssertions>0</nrOfAssertions>
                       <nrOfErrors>0</nrOfErrors>
                       <nrOfWarnings>1</nrOfWarnings>
                   </counters>
                   <reports>
                       <warning xsi:type="BAR">
                           <description>Attribute '@listID' marked as not used in the given context.</description>
                           <location>xml:12:0</location>
                       </warning>
                   </reports>
               </report>
           </step>
           <step id="4">
               <description>Step 4: Validate invoice against BII RULES</description>
               <report xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="TAR" name="Schematron Validation" id="4">
                   <date>2022-10-14T15:21:30.250+02:00</date>
                   <result>FAILURE</result>
                   <counters>
                       <nrOfAssertions>0</nrOfAssertions>
                       <nrOfErrors>2</nrOfErrors>
                       <nrOfWarnings>0</nrOfWarnings>
                   </counters>
                   <reports>
                       <error xsi:type="BAR">
                           <description>[BII2-T10-R051]-Sum of line amounts MUST equal the invoice line net amounts</description>
                           <location>xml:172:0</location>
                       </error>
                       <error xsi:type="BAR">
                           <description>[BII2-T10-R052]-An invoice total without VAT MUST equal the sum of line amounts plus the sum of charges on document level minus the sum of allowances on document level</description>
                           <location>xml:172:0</location>
                       </error>
                   </reports>
               </report>
           </step>
       </steps>
   </TestCaseOverviewReport>
