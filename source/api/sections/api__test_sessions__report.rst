The **report** operation is used to retrieve a test session's report. It can be used with any test session, not only sessions launched via the Test Bed's REST API, as long as you are authorised to view them.

To call the **report** operation make an HTTP ``GET`` to path ``/api/rest/tests/report/{sessionId}``, where ``sessionId`` is replaced by the session's identifier.
As with all Test Bed REST operations for session management you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **organisation API key**.

The format of the report is by default XML, using in particular the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__ syntax.
You may also request the report in PDF, by setting the ``Accept`` HTTP header to ``application/pdf``.

Once this call is made, the Test Bed will return a response with a ``200`` (OK) status code, whose payload is the report's content. The following sample is a complete
example of such a report (in the default XML format):

.. literalinclude:: ../testHistory/resources/test_case_report.xml
   :language: xml
