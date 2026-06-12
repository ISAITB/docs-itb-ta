The **deleteOrganisationProperty** operation is used to delete the definition of an organisation property. To use it make an HTTP ``DELETE`` to path ``/api/rest/configure/organisation/{property}``,
setting ``{property}`` to the target property's key. In addition, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

This operation takes no payload when making a request. If the target property has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
