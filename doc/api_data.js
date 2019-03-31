define({ "api": [
  {
    "type": "post",
    "url": "/street",
    "title": "add new item",
    "group": "Items",
    "name": "Add_new_item_to_system",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   picture: string,\n   title: string,\n   category: string,\n   latLng: {longitude: string, latitude: string},\n   description: string,\n   price: string,\n   active: boolean,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/street/:id",
    "title": "get all images of any item with id",
    "group": "Items_Image",
    "name": "getItemImages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>item unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items_Image"
  },
  {
    "type": "delete",
    "url": "/street/:id",
    "title": "delete any picture of item with unique id",
    "group": "Items_Image",
    "name": "get_all_images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>item unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"pictureUrl\": \"S# url of image\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items_Image"
  },
  {
    "type": "post",
    "url": "/upload",
    "title": "upload image to s3",
    "group": "Items_Image",
    "name": "uploadImageToS3",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"image\": \"base 64 code\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items_Image"
  },
  {
    "type": "delete",
    "url": "/street/:id",
    "title": "delete item",
    "group": "Items",
    "name": "delete_item_completely",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>item unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/street",
    "title": "get active items from",
    "group": "Items",
    "name": "get_all_active_items_from_system",
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/street/all",
    "title": "get all items",
    "group": "Items",
    "name": "get_all_items_from_system",
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items"
  },
  {
    "type": "put",
    "url": "/street/:id",
    "title": "update any value of item",
    "group": "Items",
    "name": "updateItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>item unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/street/user",
    "title": "add new user",
    "group": "Users",
    "name": "Register_User_to_system",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  email: string,\n  name: string,\n  longitude: string,\n  latitude: string,\n  fbId: string,\n  picture: string,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/street/addFav",
    "title": "add item to favorites",
    "group": "Users",
    "name": "add_item_to_favorites_to_user_list",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  userId: string,\n  itemId: string,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/street/likedByMe/:id",
    "title": "get all user likes",
    "group": "Users",
    "name": "get_all_user_likes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>item unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/street.js",
    "groupTitle": "Users"
  }
] });
