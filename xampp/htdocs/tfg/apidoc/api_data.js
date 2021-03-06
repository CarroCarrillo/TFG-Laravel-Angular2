define({ "api": [
  {
    "type": "get",
    "url": "/file",
    "title": "Recupera un archivo DC/XML o RDF",
    "version": "1.0.0",
    "name": "GetFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la imagen a descargar como Dublin Core.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Indica si se descargará como DC/XML o RDF.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Archivo con la información Dublin Core.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/FileController.php",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file",
    "title": "Almacena un nuevo archivo",
    "version": "1.0.0",
    "name": "PostFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Archivo a guardar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashedName",
            "description": "<p>Ubicación del archivo con su nuevo nombre.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/FileController.php",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/finder",
    "title": "Realiza una búsqueda en el sistema",
    "version": "1.0.0",
    "name": "GetFinder",
    "group": "Finder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Cadena de consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scroll_id",
            "description": "<p>Identificador que indica la cantidad de scroll realizado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hit",
            "description": "<p>Lista de resultados de búsqueda.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hit._id",
            "description": "<p>ID del resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hit._index",
            "description": "<p>Índice del resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hit._score",
            "description": "<p>Puntuación de coincidencia de la búsqueda con el resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hit._source",
            "description": "<p>Objeto que es el resultado en sí.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hit._type",
            "description": "<p>Tipo de resultado.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/FinderController.php",
    "groupTitle": "Finder"
  },
  {
    "type": "delete",
    "url": "/image/:id",
    "title": "Elimina la información de una imagen",
    "version": "1.0.0",
    "name": "DeleteImageId",
    "group": "Imagen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Imagen"
  },
  {
    "type": "get",
    "url": "/image",
    "title": "Recupera la lista de imágenes",
    "version": "1.0.0",
    "name": "GetImage",
    "group": "Imagen",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "image",
            "description": "<p>Lista de imágenes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "image.id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Imagen"
  },
  {
    "type": "get",
    "url": "/image/:id",
    "title": "Solicita la información de una imagen",
    "version": "1.0.0",
    "name": "GetImageId",
    "group": "Imagen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único de la imagen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Imagen"
  },
  {
    "type": "post",
    "url": "/image",
    "title": "Almacena una nueva imagen",
    "version": "1.0.0",
    "name": "PostImage",
    "group": "Imagen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Imagen"
  },
  {
    "type": "put",
    "url": "/image/:id",
    "title": "Actualiza la información de una imagen",
    "version": "1.0.0",
    "name": "PutImageId",
    "group": "Imagen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Imagen"
  },
  {
    "type": "post",
    "url": "/token",
    "title": "Realiza el inicio de sesión recuperando el token",
    "version": "1.0.0",
    "name": "postToken",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre del usuario o correo electrónico.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>Tipo de token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Duración del token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Token de acceso.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Token de refresco para obtener un nuevo token cuando acaba su duración.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/LoginController.php",
    "groupTitle": "Login"
  },
  {
    "type": "delete",
    "url": "/me",
    "title": "Elimina al usuario con la sesión iniciada",
    "version": "1.0.0",
    "name": "DeleteMe",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Recupera al usuario logueado",
    "version": "1.0.0",
    "name": "GetMe",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Recupera la lista de usuarios",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Lista de usuarios.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created_at",
            "description": "<p>Fecha de registro del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.updated_at",
            "description": "<p>Fecha de última modificación del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/user/{id}",
    "title": "Recupera un usuario específico",
    "version": "1.0.0",
    "name": "GetUserId",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/user/{id}/images",
    "title": "Recupera las imágenes de un usuario específico",
    "version": "1.0.0",
    "name": "GetUserImages",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "image",
            "description": "<p>Lista de imágenes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "image.id",
            "description": "<p>ID de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.title",
            "description": "<p>Título de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.description",
            "description": "<p>Descripción de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.source",
            "description": "<p>Fuente de procedencia de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.language",
            "description": "<p>Idioma, si procede, de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.relation",
            "description": "<p>Referencia a un recurso relacionado con la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.coverage",
            "description": "<p>El ámbito, el contexto o la localización de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.creator",
            "description": "<p>Creador, autor o usuario que subió la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.contributor",
            "description": "<p>Entitdad responsable de hacer contribuciones al contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.publisher",
            "description": "<p>Entidad responsable de hacer la imagen disponible.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.rights",
            "description": "<p>Información sobre los derechos de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.date",
            "description": "<p>Una fecha asociada con un evento en el ciclo de vida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.type",
            "description": "<p>La naturaleza o género del contenido de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.format",
            "description": "<p>La manifestación física o digital de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.identifier",
            "description": "<p>Una referencia no ambigua a una imagen dada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.hashname",
            "description": "<p>Nombre de referencia a la imagen dentro del sistema.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.created_at",
            "description": "<p>Fecha de creación o subida de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "image.updated_at",
            "description": "<p>Fecha de última modificación del contenido de la imagen.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Almacena un nuevo usuario",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Confirmación de la contraseña del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/me",
    "title": "Actualiza el usuario con la sesión iniciada",
    "version": "1.0.0",
    "name": "PutMe",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Apellidos del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de registro del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de última modificación del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Imagen de perfil del usuario.</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Usuario"
  }
] });
