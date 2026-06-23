The **report** operation is used to produce a conformance statement report. To use it make an HTTP ``GET`` to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system linked to the statement.
* For ``{actor}`` use the API key of the relevant specification actor.

By default the format of the returned report will be XML, expressed in the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__.
You can also request a PDF report by specifying the ``Accept`` HTTP header as ``application/pdf``. In addition, you must include in your request an additional 
HTTP header named ``ITB-API-KEY`` set with the **organisation's API key**.

Once this call is made, the Test Bed will return a response with a ``200`` status code, whose payload is the report’s content.
The following sample is a complete example of such a report (in the default XML format):

.. code-block:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <ConformanceStatementReport xmlns="http://www.gitb.com/tr/v1/"
                                xmlns:ns2="http://www.gitb.com/core/v1/"
                                xmlns:ns3="http://www.gitb.com/tbs/v1/">
      <metadata>
         <reportTime>2024-04-02T14:13:18.267+02:00</reportTime>
      </metadata>
      <statement>
         <definition>
            <party>
               <organisation>
                  <name>ACME</name>
               </organisation>
               <system>
                  <name>Test system</name>
                  <version>v1.0</version>
                  <description>A system for test purposes.</description>
               </system>
            </party>
            <domain>
               <name>Docs domain</name>
               <description>A demo domain for documentation purposes.</description>
            </domain>
            <specificationGroup>
               <name>EU Purchase Order Export Format</name>
               <description>Specification to define the data export format for EU Purchase Order Exports.</description>
            </specificationGroup>
            <specification>
               <name>Version 1.02</name>
               <description>Version 1.02 of the EU Purchase Order Export Format.</description>
            </specification>
            <actor>
               <name>Actor</name>
               <description>Order supplier.</description>
            </actor>
         </definition>
         <summary>
            <status>FAILURE</status>
            <succeeded>2</succeeded>
            <failed>1</failed>
            <incomplete>0</incomplete>
         </summary>
         <lastUpdate>2023-09-29T19:00:01.000+02:00</lastUpdate>
         <testOverview>
            <testSuite>
               <metadata>
                  <ns2:name>Simple TS</ns2:name>
                  <ns2:version>0.1</ns2:version>
                  <ns2:description>Simple test suite.</ns2:description>
               </metadata>
               <result>FAILURE</result>
               <testCases>
                  <testCase>
                     <metadata>
                        <ns2:name>Simple TC</ns2:name>
                        <ns2:version>1.0</ns2:version>
                        <ns2:description>A simple test case.</ns2:description>
                        <ns2:tags>
                           <ns2:tag name="security" foreground="#ffffff" background="#d20000">Test cases linked to security issues.</ns2:tag>
                           <ns2:tag name="version 1.0" foreground="#ffffff" background="#000000">Test cases introduced in version 1.02.</ns2:tag>
                        </ns2:tags>
                     </metadata>
                     <result>SUCCESS</result>
                     <lastUpdate>2023-09-29T19:00:01.000+02:00</lastUpdate>
                  </testCase>
                  <testCase>
                     <metadata>
                        <ns2:name>Simple TC2</ns2:name>
                        <ns2:version>1.0</ns2:version>
                        <ns2:description>A second simple test case.</ns2:description>
                     </metadata>
                     <result>FAILURE</result>
                     <lastUpdate>2023-10-02T17:09:32.000+02:00</lastUpdate>
                  </testCase>
               </testCases>
            </testSuite>
            <testSuite>
               <metadata>
                  <ns2:name>Simple test suite</ns2:name>
                  <ns2:version>1.0</ns2:version>
                  <ns2:description>A simple test suite.</ns2:description>
               </metadata>
               <result>SUCCESS</result>
               <testCases>
                  <testCase>
                     <metadata>
                        <ns2:name>Test case 1</ns2:name>
                        <ns2:version>1.0</ns2:version>
                        <ns2:description>A simple test case.</ns2:description>
                     </metadata>
                     <result>SUCCESS</result>
                     <lastUpdate>2023-09-28T15:52:14.000+02:00</lastUpdate>
                  </testCase>
                  <testCase optional="true">
                     <metadata>
                        <ns2:name>Test case 2</ns2:name>
                        <ns2:version>1.0</ns2:version>
                        <ns2:description>Description for the second simple test case.</ns2:description>
                     </metadata>
                     <result>SUCCESS</result>
                     <lastUpdate>2023-09-28T15:52:16.000+02:00</lastUpdate>
                  </testCase>
               </testCases>
            </testSuite>
         </testOverview>
      </statement>
   </ConformanceStatementReport>
