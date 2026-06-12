The **deleteStatementProperty** operation is used to delete the definition of a conformance statement (actor) property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/actor/{actor}/{property}``,
setting ``{actor}`` with the API key of the target specification actor, and ``{property}`` with the target property's key. In addition,
you must include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
