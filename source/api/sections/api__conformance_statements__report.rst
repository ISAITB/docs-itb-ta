The **report** operation is used to produce a conformance statement report. To use it make an HTTP ``GET`` to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system linked to the statement.
* For ``{actor}`` use the API key of the relevant specification actor.

By default the format of the returned report will be XML, expressed in the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__.
You can also request a PDF report by specifying the ``Accept`` HTTP header as ``application/pdf``. In addition, you must include in your request an additional
HTTP header named ``ITB-API-KEY`` set with the **organisation's API key**.

Once this call is made, the Test Bed will return a response with a ``200`` status code, whose payload is the report’s content.
The following sample is a complete example of such a report (in the default XML format):

.. literalinclude:: ../manageConformanceStatements/resources/conformance_statement_xml.xml
   :language: xml
