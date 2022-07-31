"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPlacesByPlaceId = exports.getPlacesByUserId = exports.getPlacesByPlaceId = exports.DUMMY_PLACES = void 0;
exports.DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire state building",
        description: "One of the bigest skyscrapers in the world",
        address: "20 W 34th St, New York, NY 10001, United States",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcaGxsaFxobGx4YGhobGxsaGxoaFxsgIiwkGx0pHhsXJTYlKS4wMzMzGiI5PjkxPSwyMzABCwsLEA4QHhISHjIpJCoyMjIyMjI0MjAyMjIyMjMyMjQyMjQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAPUAzgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEUQAAIBAgQDBQUECQIEBgMAAAECEQADBBIhMQUiQQYTUWFxMoGRobEjQnLBFDNSU2Ky0eHwByRDkrPxY4KTo8LyNDVz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QALBEAAgIBAgUDBAIDAQAAAAAAAAECEQMSIQQxMkFxIlGBEyMzYZGxQ8HwFP/aAAwDAQACEQMRAD8AwQroGua6FesSMRFKK6SKmRVIPQ9P6USVi5T09iCnApEU9Ybd7ipRSroVpliFKlT1plip6QpVoLY4pUqVEA2KlSpVqFyYqempxRULchU1OaatoFysVPSFKtBsQpU9KuMFTxSFdURhRpxVvEYBkqO5YK76VGkeq8iIa6DU0U4FcY6fM7Rh1EimIporpRRLcW6jujpLTESFJHkJqzgOH3LrZUHv6VqeCYZLdsPcXpInp1mr/CsbbQtCQJMaeO9Jlkq6QyMXKrdGR4lwG7ZAZlJXxA29aGRXrlq5buoVYhlagvGuEWltvyiI5T1B9aGGftJbmzxNbxZ55T11ctlTBFc1VRLqsVdONTXNd3vaMbf2ru5zexxSpUqYhLkKlT0gK0AQpRXQFOBWmWcRT10RTRXGWNTxSpwK44QFdRSFdok9R764zmJLzkbknr1qC6hnmBBO1WUaASo1rl8SSNTJqdFTf7IEskzXBWr4wpC7kk+FdfoKCSxjyrrRvqBkVa4ep7xYAOvXar1jE2k2thuuuu1WLGNtlhNoDUa/lWW/YPVqq2ixxvFsLaqu86+nhQtOLOBAA2+dHcRw5LgXIN/81q3Y7EBhLOQT4RFLU4RXqDljySdxM1guMPbJO80STtAXQo+pIIHvpcU7LG0yw2ZTMnwqouCKsgOp1AHoKL7c90B92OzB2KRtCSNNB41VojxNcoysoDb6fQ+ND6dHdCG6dHJqXEe0fd9BUdW+IIoKldmUH1OzdTGvn40LklNL9MNJuDf7RUp6UUqcIbFXQphTgVoLHAp6VKK4welFOKVcYcxTxT08VxwhTg0opwK4w4NwkQAKZUC6nf5VCpq3ZiZOtI5FSdssYZ2aIKgdfGiBw1tt9aGnfcCurbx4k+QmgavkOjJLZlr9EQMIAAqUWvCKq963ianspmPz/tQu+4arsgvhMeqqFGkbT40a4dxIvInbrQA6r7IBq3wdSqs0aT/k0icU1ZRCTTSNThkDKQ8NrrIoTxXh9oSZykbH8qfDY4FoBgfShHGLdy5cIJItxv8AnS8cXq50HOS08rM5xjV4ZxpsRr8aFEUX4ph1DROg+MdP886FhJ2r0sfSeTkvU7JcDazOoJyiZk+Wsa+ke+p+J28pQToAR8z0+dNgzuu8xU/FGEx1Xf3knX/OlIk/vrwURX2H5BVS27JbbWKY066VWRWI2jExSRZqYX2iOh3rlTXbnOhG3XEVYZS0ePSuHsspgiuTOaZHFKKK4fAKUzOcvh1n3VTv2xPLtWKabo5waVsrxTxXRWpbVksYFFYNNkQp62XAOCBCtwjMY67e6jF3s1hrhLgZSdwNvWOlTS4qMXRXDg5NWee8DwodiGIGYQPWreO7OXVPLzDy3+FHMP2fFlwpBPgfOtrhcGoQTqalycRTuJZDhk1UjzHBcEJ0uBwTt0ip8BhhbuBWMSevX+legXMEhPjQrjHBFdg4MEbe6hWfVsw/oKPICcVwNruy40YHpt8KAu7ToY22EUX4lei5lUgwObwn/tQi5fOYwPgKdjToVkaskF519a0NrFIMPp13NZZnc+0D76tDFnu8kdZFFOF0DGdWW8+sr8zUl3HkEdTEaHpQu3c15gSKshlOoOWucPc1TvkVse5Y+wdtyNaGKjDUEitAlgPoDNLEcIy7k+kfSmRyKOwieKUnqQK4LZLXAFAL5gNf2SQGidJgke+tDxHhzvbyKhEnlHKBmYnLrmO5BoV2fdUvW9+Yr1jU3E6+A1rY2+70IUjVAJY6DvGZd23AzCd9a8jic8lk1Jcj1OHwL6VPkzzZ0ykqdwSD6gwa5iiHFbRN64QNCxYejaj5EVU7sxMGPGvcxz1RUvdHiTx6ZNHCinAqd8OywSIB2PQ11ZtA9YotQOh3REjkbVIis0x01NW14dyk6nw8KNcCtoisbkSYkHw6UueRJWh0MLk6YDwdlrnLPpVxeDtGu9H8M9lXYqBJG0VTxFzu2I+6fPr5eFJ+rJukqKFgilctwRicKYAIAAG46+RqvYtQ4q7exIMzrUGEaT76Ym6EyjHUqNZwbHchVgQB1/pQ7inEHV5V4BGnnVzAWwPve7ofGgnGFC3WA26VNCMXNlc5SjA2vHMQEgyI6+XnT2OKjKCDI8RWR7WXM3Pbc6nmXx8xXXAUuBQCG16noPSkfSWm2P8AqeqjaKpeGB0rPdqXvSEtCR97/PCtBg2ypBNSJaRhOvoaVGWmVhyjqjR5Yl1kci5mnqI0q0t62TqpEdf61scfwdLjZQnw3pl4BaRScmhGs9Kr+vFomWGS2sx+NZYBXfr4VWa2ygE7HY1Nxi0iMFtnTXrNUbdwnQnTwqiC2tE836qZocHhbQtkk5mbby/vVN7EDXN+VdcNuBQSwlfpV+7jRIIPL6dKTbTHJRcSlhroQjSPHxNX+J4+bLkCGAMGJ6fKqeJvqxkCPzqpjrpNth0g/Q1k42rNjKtgp2bw6dyGyIzZvaZVY6G2BqZjcmKMiDlJtoSY+6NPtGUEGNxA0ig/Zo/Yb/e8v2rPT/N6L239jxMbQB+ucdBXj5d5Pyelj6UZzihlUYqEaei5Z1ZYOg2CCusFdWIbUddNNelX8dkIBeOkT4y9VkVCIH9K9ThpXiS8kGaFZG/BFxjIbYC7dPKgaNHgaO3LDdAI86rXLC9RJ6RVUJJKiacHJ2VLOMYAjoaQkj2takGCk6fCnOCcawfhR3EDTLuPbtECQdahxCOp5qtWrbAS23zp7lzPoRp0NYpbmuOxTT41aNpMpnlfceFRdyasSCpVt+nlWyYMY+51gcSwBWocYSxkmelI4ZlXN51DFYkrtBNuqZ1hb5DBbgysIIn+lbzhWJ7xVDKBpvprVLiHCrV0AsoJ6Muh+VR4DhxtMMhMdQdahyTjJfsuhCUX+jSIBO1TiBVWxNPcNTDywgWSepqUKpBBobbJBqVMTuI2rqOMz2l4LaDFl0Yg6dJ6GKyb8NuIMzCB0PQ1ueLYcu2bXT4VmeJXLhlZkDarcM3VWSZcau6KmCugqVzAHz+lROzAwa5tgbEQajyN0FUpKyfeidW8a4x/6tokcp/p4edRq5FLG3Jtn8J/KgyL0hQe5r+CuEw4CCBBMROudRuZ8f7VfS4SdgIGnIP3hHhp4++aEcFWcOPMMOn7y3uSR/k1eCmSNOh+7P64nx+X514ORLU/LPXxv0rwQ8SKlQGj2Q3sga94yztO3ShxAiFAnxirPEgQJ0/VjwG115iPWqNnEkbV6PCL0be5HxD9XwJsOf2q77vLuJ+VW0YN5VFdtec1Tq7MTp9jrBgZtoFWcQrLoNfA1SRQPWauWL56gx60MudhR9iFrJI5hUD4RIgD3zRNrgI/z51wFJ3rFNo1wRnOK4xLTZJJbSRAA1E+M/Khd7ijEcqgEbHfXoIo5i+HW7lxnca7fDSddOlUe0Dd1bDWoVpiYB6E7EEVjySe1gJRvkR4HHXGuMly4FSG1IVRI2Eke6qf6U+dgSCstBgawYBn0qJcpUM2rGCdTMnc+z4k0mKg6ae+fdqtAm07tjW4tVpXk33Z3OLf2nurQswyEjU/Os9hsyMBsPCiTYvLpPupc1crGQ2VEiY8ab69DvV03V3BoNc5oaNeh8KbO8cqyevnWabNs0Vi4DUN18rHTTxoXwq8QxDHXwNELq5mifWhaphJ2i3aZWHShPEuEyZXr8jV5LBUadKGYnjhtnKy61sLv0mSqtwHj+Bv0AJ6kafEVxYwGUSSAR0ojc45KkhRPhQg8ScyMg18taqi5tUyeSinZSxuHUag+tDcWvIfQ/lRq3grt06IR6ggVR4raKIVIg6zNMlL00L072aDgxmwkacp67Rct6+yfzq5n1Ov1mO+jQ5f8+dD+DEfo4OhEN4xHeJ4Hx86vmATLdDP/q6dR1rxcnU/LPSx8l4Kd9C5MzHdgSTO11prsYa0qajfxPzqK6mcErv3cfC82u/lUdq1ykMdYMa7Vdw3Rz7k2bq5diDvIaJq4ryKG5IOtTW2g6VW0ITLpjrSRqaRXANCGWrZnerGRB4/GqSGrGagYSBlwjM34j9TQTtW32I/F/8AE7fKjV1uZvU/U0F7Vj7Cf4vyNLXMV3BVsrlXf2R0HgKcuvQA+o1+Rruzf5FGuir1I6ADrXRuzpBPXc/3rg0eqPhRIJ6bVWbAjPmiR1FXiAwkHaqz3SOlLTZQ0iRFWco2PSrmHwygUJw96DrRe1ckVkrRyIsThgOYASKjVwGk9RU169pFUbllmZdNK5GsMJqtZ7j/AA8XACsBx86MhmUAATQTi185940iK3HerYGdVuZYhlOuhBqzhrwnmq+mEVgCCDPjvVxeFIo5l0PUdKqeRdxKgwlwrGqUAnbx/OhHbq2hsq4Anm8PCaIWcJkOkEGhPbZx3IHXm8P2fP8AKp9tWwx9O4/Dm/241+6dJP7y34j0q3cMltQNPE/vT0j1+NUeGf8A443jKeh27y30q7dXmYnw/i/e1BPqfkqh0rwRzEkc0J46frG6VlsZxFxiuuVROQCZhJ2jXU+lbDCW82YH92w67942tYrCOyY26JErnGqg7MB1/pVGGVY5CMkbkjR4mwwElUAO0Bp9nN+wPLrVRKInFkoqwOYiTlUbkjx8ddqohadwmRyTTAzY9LR0HqRDUYSu1WqhVFhdBUbXT0pKhPSllodjSkzHMT5n60G7U/qAPBgPH7pow3tH1P1oR2qP2H/nH8rUlP1AUVcNaU20JB1VZgj9kfwGna0g9fMr9MtLCoe7TX7q9V8PxipGt+h215Z/6ldYZ6Ol6GiDHypXVBnxq/btgik2GB3pVlFAZMMx2b5Vfwbts1NctMswKmtMK1ysxImNqda6ValUaVFcEUFhlTjHGbOGVWukjMSFCqWJIiRpoN+sVm8b2mwN397ME6IJAAmfa23qj/qVclsODMAXDHmSg/L51kMERmO/6u98rVw/UU2MPTqEyl6tJ6tw18OVUqDrl0bcFhaKj/3rX/NRV2VreYCVKgjzBEisTwwA5pZhlNgiADMWsJc199pB6E1r+FKFsWlkkIgSToSEGUE+cCpozk5blEoRS2BVu607daA9rLxNsg+fj4dYrdW0B1ERWP7c4LJbzjrPQ/sk1TGSbJ5xaQ3CYGGG0wT90j9Zb0jY61cxR1fQbHoP3w91UOEsf0can2SJk/vLdX8W7LnM+PXabw6elQz635KYdK8HOFcqxK/sN4fvT/estYE4+6SYzZyf+cf0+da7hiyx/C/Wf+I1Y+3/APsLno3/AFBToP7b+QJL1RNRbtISnNrKxzDUFjOnrAn3VaxPCCq5kObyjWh+GbVB/GgPlL/3rS4e9HuMUPCTasPPFWjN5Y0NDuK8Qa3lFsoWkBgdWAPWBsPPzFbjG4NbokAZo3rz3hXD2uXsQi3MhXvM2kyc+UbHoSD7qqnlSi2IjC5JF27xG+MxS2TCyPs2MsGYMsz5LHqDsdLVjFZlPeEB8xAnQnqdzqNRHuFcYzBtbS2GuMA52RZIIuW0j2hyzcX/AMqnyqLA8Ea5btXFuGHAYSNg8xIB0jwBMTE1HHM1Umy6eODTiq3/AFyOLvtH1P1oR2o/Uejj+VqL4iQ7jwY/U0H7UH7AfjH8rVXB20zy2qK+DvjIgOkIusmPZHQCp8RtrO/g/n4rXGCCd3bnJ7CzPdzt1nX4094pGmTfp3f5UT5mo9SN5baM7mFUFmPQAbmo7fGbLMqrcUsxhQNZME/QUF4zxiy9u5YW4rXHtuFjVdiNW9kbHrWd4X9ndS5IYLqQpUzMrAM+v/LSG6KUmeiXSTtVVFIP515tiO0F8pcuW3NoXLlxyqwdRbYjmyzpkT4esnuH8QuWsFcLnIVts1hmgBjkYhUBENDCY19qt3Wxlpm2W9G9J8QCK85wna57bDvne6DbRsoS2vM9tHEMI05j/ei+F7YYd7ZZy1tgYykZp9rYjfRddIEjUzROLQKmmDv9RWl7Po/1WsvgLZLNCk/Z3tgTE2rgG3iSB76Idp+LpiLg7rM8KsGCAupkAecqSfIeFCcJbdriIQ6q7KrQG2J1J8QN/dNOTqFMTLqtbm74OmlyQde5jcT/ALazqPHUR7q0uGugWgPXbXqaZuLWxoMwAEABTsNhpQnEYzM5KSAddRl1O/zqHC9U6/Q9yl3VBi1idgNKDdunnDLP7R8/uN56U1vEkb/Gqvads9tAds+un8J6wY9RVbjTAbtHfBtLCmSuh15hEumtWsQs94BrvtJP60HasinEu7cK1yES22UCTLM6HoBOincae+i3DuPi4oU2wAVCKxaHJAkcu08pYQdQKiyQlGWrsUY5JqgjhuI27TFzcWArCM4mTcPifOazQIPEbsGfaiNfvqfPpr/k1Q4jw42wC5zFsxLZeoPUs4k7fOjnZ0C4A7ZS4ud3mIligC6ZuaPaPX7x160yTUMbknaYMYynNJ7UEE2WDEFPD9vXpp8OvSr+BvsqrJ0IGunh5aVRe6beVS+WXVVDALJ7vMBqkzmM+M6eIrnDdoAzWrZtgh13nXTNPKB/CTpQcLJJN9gs6uSRobmPi3cgwQjEEdDlMEV592RdzjU1YhmfvDqQ32dwjvPHmg69QDvRXtVfBtZVQrzjzB5W0GlL/T4OouyCJa2BIidbm1NzSSxNrv8A7Axxbmkwzx/EsmHVgEJ7zKMyK0ffkBgADmRT7p8xx2Zvs2FtM2pDN02i5cGgiAAPDb69dpXP6MTOocfU+ER0oJw/iNpeHtaJ52F1QI8S8Tp5z796ijHVjpLuUOWmW77D8bbLjLnKYIQzsJyLOsb0I7TNNgfiH0ar3FeP98UDAhEMjXXWN/8AloLxvFo9oKu+YE6eTdfWvQwRkopNbkORpybRNhFfu0hWPIsasOg866xZCwGeD4HN+Zqnw2/CgEA6CNEnb+IVWxrEEkoNSJYaAkDQQIAMU7TbA5bha5ezYlVt2yFLIFc5jHNJEjQqQWJ+oANWWhWtDKGmUGf7sI7qRAkQ0666E1fxVi2MpVVWApGVVBk22UgkE6c8xHTrQ/EBme3lB5GljppmtuF+f1qLXqar2LdGlO/c6w2Ht9zbtXE1BLuyzLZ1IZTAkJzECAIka1Z4rd7zCd0yylrM9tuWRlBAUwsEePXXeoGPIhERIgRzHlGo5wCNPEHy3mbFWx3cF0LstwvbiWTu2KkMQzbypjqDpNZqdp2bpVVRnONgBwARoAIjbKAAPhVXAO+dSk5pOWBm3kHTWdCelXOK4dnYssEZXedQIVc7CToWy6wPEVW4PjO6c3IBIVgsgEBjpOvv86ti/RS5kcl67ND2VW6L1xrq3Za37ThoJDJ1Pl9KOLhmuXWYHmTlUwCBAUsAcwjMtxd/hvQq5x4PauvbhbnKSpTQBnC6nTMYJOvzqZ+K2WIYOqkOCotsRnNzkLOojMwULuCRI1HWCam5OVV2LYaNKV2c47iwttkGQMozmeU9CNAJkkjQxtVOzxO7cbS5JYSFEHL+0Ij+u1FO0HE7l22uHFsXDysgUagiRmPMCYXNqJAJE7ihvA3t22UETdzgKVSRkEZsxL6aidj46QKbCtGpLcVK9WlvY6m7f720zBVQIzZlGq7ySDpzIx22ih+Pxdyx3WGMd0oS4OUhxmJJBObXUn40WsXk77EZWVg9tABoAdL0rpMgcu3iNKAdqFIuWwWk90oLeMPcH5UzHklKel8qBnBRhfeyvjy1y9kG5YIuaephZnzNabHIBctAZQFuBQF2hbdxQB7gNvCs7wbDZ7tt3bKAweQMxOUloiRv3bD4UfxDc1vfW5p/6dyg4h+pL9MPBHZvwLizHurhzHlQkanTTpUXY9z3BOfKRdbpP3bWvsmI8vE+FLi+ICoFbUXJVv2gpHMy+Y08ql7PYd7Vq7byzFxjLjLAKWiGIPT+h2pUV9mn7jJP7toI8SBu2btsXEz5VKtlhptulw+wg1Kodp2FBezeGDEP95bhkwzcottyjoNyek7eFEX5CXuLaQDR5ymA4ynqTqpO3nQ3gXEsPZshbjrnzOWXJmOpCEE5TuFbrs2u9bFOMHGK/gGdOabBnErp/SXM9Z8NY89q3XYe5Fly9wqqKhlmhVzNcZjqYB138hXnOJxMvm9kEswB0hSSfQe6i3G2KogA0nQekRTs2PXBREwnpk5G84rlv2u7S5IZwQwUvopOgCgyTAj8Q3FDeCdl0Nt0vB/blWCG2xUqdIddBJ1EbgUX7GP/ALK0Ynfr5LRkODup6jfwJHwO/vrzpZXiTgvcq066kzzPEcHv2jd+yu93nbI2VjyjRTOXwFC8fw/MES09u5ccK2RCM4BTNzT4TXr+Yfs/Ez5j5/Ss7+jLaz20TklYVciIuaFyqNIBMtrMkmPCnx4yVWuf9gLh4t0+Rglwdy0itcXIGgCWEmB4Akx50PxjSdh5HKCdNxmOvUabV6A9iy8IbakIgKrnUgKQuwB0USNdB4aGsDxm2qX3VSYEATqY8yKt4fP9R01uIz4tHLkaHFl7l3uwzJltAysyYKrMGBoOvSDU9iyE0DEk7s3Mxy6dTA3jyqhw/itu5cJe3ACrmIPOyC5bGUGNN6u94CxKyFOYqDJIBaQCfSpZpx25FMGnvzK/ctdvJZtsttSjFnaGVQqMYJUZm5Rr4yDW64Z2NsC0guqpdQwZ7b3EE55IUEwqyIMD7o3Ezh+yOKnGoS0Q1we0RtbIGoHlXr1vVJmdW6zszDcx6V2STjsgElLcxPaDhtrDWrlzDy7XcmGQMWPdv3ZCFMwYjcE6jf315WnKSp0KkqfIgwete44+84s3ftOjj9YfHDiIya+0wjbmj7xy+b8RwNu4rMV50RyuWBmJEKG0khSARr987jSmYsyhKn3AyYnKNrsZy1cJMDykDrHiBvUOFuBXUk6B1J8gGBP51bvYJrQtO5GW4CVIhtAYaQeoqlZiZ6AGZ8KttMmpqjVpeYZbxuQoLkQnMFgKBM7bHbcmrPBe5FsXFDG7mZM4KqhQiIKEgloYa/Og3FUVLaWt2JOY6aENqNtRzGI85orhUKd4kyFdEJg/dtWgT5DQ7+XlUM9lt/yLILU9/wDmU+FcHa1cYsVMghIMtoQDIB0PSJ6GuO0DhyCbcd23dzr9oGDNrAkZGBG/3vWqPFcQz4grmMC4EG+nsqRB81951o9xLgWa5bsqjIJdjkBuELlzLmSWbUn2svlR7pqUudfwBSknFe/8k/BXwtllc2mclVEFhlkpBIWZ/aO2mY0LfHF0Qgss7gCWBhdYGsSTB/rRizhGS64uBiXJFslIBVVRyyk+BYofQ+Ypdo+GhLGHZgytLqQ6sdIQqVgZtp3pcZJzV7sZKLjHbYrYNkNlluW5LMQWdij7B4Gvr7pNEUXNbusAsoEzBpg55iCNtV8t6xOJx9xB3aOFX2pCkSTA0kSNOo863vY5BctX84DANbIkAlTzcyzsdBqPCuy4mlbBhl7IEvgswIuOMrBi3QqS4dcvkACBPzrNXsECwIuLmZ2TJu3KwUkxtMyJiYbeK9CxPEcPiBaYXSJcWlIttBuXMkCGGnTU6Cd6zN5+8w11gwYq7upGZXDAQACeZok6ajUkRGhYpSjzMmlLkW7DWbLYYPiP1N1XgKVMFwzM86wI6a0D7UXCFQeJb5RQfDWLl1xbtq1y42yqJYmiPaR5W36t/wDGnqGmS3tinK09j0vsS/8AsrWgP/1WjmfyX4Vn+wx/2Nr3/wAqVoK8TP8Akl5LsfSh8/kPhWF7SIRjrbnMVbkVROh7vUqTsTI210rcVluO4q1buFrhtiGUKWEkHJbMDWQYk9NCPKiwN2zZIkt3SbSDK+hubh+mVp2mY2nfppXn/a4RiWOvMttoggjkAgg6jatXZ4nYy5+9RQCQOYCC2XMPa1JAEx4fDP8AHks3XN1b4nlXIFLsfaJeQYgSq/Cr+Fi45G9+4jPJSgGP9OX1ur+0F8tQwA6GBrB9aKdskLvaVPbdbiqBtoFeJIGm+52+WP4JhXS4veW2UB03QnXONuU/lUvF+Is+JPduwRfYOUAqSOcCRPtFx7z41ksTlm1JmalHFQV4XhUtLauW3VbuoKqYdCFALEzBmSPjW84C1y9ZDveuzmdTHd6wx3zIT1jw0FeO6mTN8SNeWYnwg6e7wr1jsKkYJPZbmfWT+1MGRuNj5g1mbFo9VtmY8mrai1j+DXHBRL10j2nBcAsCjLlEALGZbZ1B9kxEmqGF7MurlmtyNlV2R1yyNXHUxm1EaxVftkWGQJAPIDvtF7wI6xWXv3nlZd/Y+6Xj23/j3j6VkcWtXZrnp2PQcN2ftOii9hLRy+wrLbYICqyojQaztpWB4r/p/iu9d7Nu33dyXCZ0t92XLHuhz8wTQZhAPQVwbjd7Zi5cP6kkDP17vfn89d+u9TYdrqW3Vrgk5WEyxGW7bUgkOdyhETqGHQ6uipQ5MCVS5oqXuzOLtA4jGBO7t7gstyS7BAVQSujspMx74qEcSSbh15riuugEwiK0noZVvjWuwDHEYXF27pVwAn6tBm0YsCROsFA09BJrznu2kgAsQSOUFtRoY99FjSyNqXYGcpQS09yO9bPeuxhudyY1Blm122nX30W7L8Ca7eI0WQWIIiVzhTHKdT/hqhg+F372cW7ZcoeYCARqRsY/wVsOxmCeziWtXVysttiRIj9YsEHqI613E5dEHT3SN4eOpqyHA4vB3cNls2vtQFXvCiA55DTJIJn091BW4diO8LtL9Jz5J1HQHlG+nnXHY4yhHSRPTZARJ+NaJwdT01+8ekGofqSxSajvv3LFCM4pyZmcVwUsty5c7wMqkgZldSFTMJY6jWfGK0HY/i6W/wBJsm3cLhlGyiO7Lg5szCDptU2VAJuqe7E94sySgDBoE9V291Z7s/iRcxeJuJOV7hYToSru5ExsYYbU1Z5Txyb7C5YIxmku5q7PLli0kLcV9LNsaLER9rpcgaP0000rP2+G3xbdFVczMxEsMsGAPPY1oC+sZTvl9pt8mYHfbce6uVMjMAR7J9onQ5TrU3/qlW6Hrh4XSZn8Ei2XV7a5LixDKNQQY39RW64XwTC3LFprli25KKSWWZnUzPpWJugKzKDIUkA+IBgGvROBn/b2vwL9KbxU5KKafcmxRVjYDBC2gS3bKKB7OYEA9eseG3hVlwRuIoV2c4ncutdFxg2UWysKBGbvJ2H8Iq9xDFKhEtHLMZSSd+o0G3zqOakptPmPjTWxLXnv+oaliVAJIuKSIP7lNtIPtDr19Y2GJxCupQXCuce0FYEbdfHXwrL8Uw+HS2CcQRcyFltlQrMxUQDA8gPz61Tw3peruBNWqMU/B7otrcyGDOaF9kAn2gNY5QZ21qK3hCZ0PT2Vnx3Egit9wy5NkCSPaHmNT5aUB7QYxlvmGIlVicpEa+zpoJnfWZ6RVmLjJTk4tCsnCKMU0y12jw7oXzMF5xcDMRJtu8LcAg5TzAxyka+FAMIy98+qsMtzWQZ5SAR/n1ra9vOPWjg1trYa3cvBZJQWyO6e2ebQMZAIFeXqabgtxti80raXsGUuoP8AiXF9SfAf2+deq9gGBwSdftLn/UPnQLs5hcU+FtNYTAFDnzHEI5uZ+8efZ0Kxlida2vC1dLarc7lH1zCyYT1UMJ1/trvSeInar9nY407M323Ii3ygxkmSNOW6J6zrWYd9EECcv8MmS2p06/WtR20Mm3BLHl0WSdRdEcgkDXeKzV1HXJmW4umuYXF+807rW4+lHT5j2j9pb2J+y/ZP7vQGPLedh51NYZxhz9nbyhRDEoWYG4xzajSObSN1U9RVJMUO8tCT/wAMe0//AIUzp4TvVKxxG0A6u7knJAWWOjITJJEbGj02Ymbns5y28UHyqNIa3GvO8bdM0L+GsDg8ITdeHu2rmZ+ZGKZhmJkHcgiPh8Nn2extq3bunMUNxbZTMS8kAzIGq6nbz8qbG4lXtEK1o3MsIRbiDyajOIC+34+0PeiM6lLcf9FtK0wLwS3dwrOwuauFDQIJIJ1JYNJ1NF+CYprmMdmmRZgk7mGXyAnWhXDMfkN1MWbdwgDJ9mmhKvMlFBgyu/uovw1k/THZEKqcPzMEKIWzAMB03HqRHhSMqk7b9ufuOhpWyVGX7GH7M/jH/TNaF9fn0/8ADU/Ss52NP2bfiX+RqPOTO5/y2ldk/K/gH/GvkmS2CrLGXNmGpmMw3JHTWdPSsz2QAF7EBYgFAv4Rd0jx0itEhi25BAIzkZTsYJkHoZ+c1muxpm7eJ3OQ/G4DQR/Hk+B0q14/BsFBzNGn2g133twDHr0psBc09MsdPuj41wAc7QY51203SBPn/amwM6j8MfD/AL0iS9HwjYfkfl/0AmeWJ8ST8TXpHAm/29r/APmv0rzDNqfU/WvTeBH/AG9r8C1TxXQvJLj5sD9jWOe9OvLa3EaZr0evrUXbDCm5eSHQEW9mbLs7azBEa/Wu+xw57v4LX1vUN7X9pltX1t22tMrW8twlTcg52GUlTKmCTprWqDlxD8f6MctOOwT3VsP3ffLnAkhVdp29hlUhtwIE6+lR8G4RhbkZ+8F052Kg5dMzgcp1ByjY+dR2uNKbbWE/R+7cZXCpdzARprc1ExHLO1DP0tO77s2wV35pkak6EMMu8SNYq9Y2lSYh5L3Z6FwN8KEa2WQhWOpcSu+jGRGgGnjNY7tg9q7eR8Ojd13arLW7g5g7kxmAOxXy+dUH4jaLq/dJmWdebWRGvNrufSaV3H2WJJsW5Jkx3gk+Md5QY+HUZat7ClmbVWdduWK31AJy93bOWTEsilj7zrWbXelSp+LoXgVPqZ6Z2fwGEu4W21/DC64zqGLsugdyBA8yfjWxwF5LdkC3bKqshVzs0BTlgFpMQAAOgAA0FKlUObn8j4chcUyjCvi8uYhBCPDKCIEgwCP1hPuFZ3GdvnC2nNme8DSouMoEEbQJnTQ9JNKlVmKCaXlgyfMG8W7eE2Xtfo4PeLcXMz5ikgpK8vSZ9RXntjFMCxB1kGYBMjQQSNPaO3l4CFSp7hFJUhKe5psPDLbZgMzBCSOUnULrHWANRG1XrFz2Pa2Ec7EAa6AE7cqe5QKVKvMk3bPXjCNLYBcVvlWhZA5dCSfuj+nzpcUxFxFQi40MhYqOUe3kjTprP+TTUqsitkedJ05F/skeR/xj+RqJtdMn3/LKB8qelUGT8r+CmP418kzv9nc9H/lNZ/sP+su+lv8AnFKlQR/FPyhkuvH4NPjbhzk/xH5WmNPwxtW9V/kWmpVPLo+F/YyPX8szRbmPqfrXoVriJscPS6FDFUUAEwJYhZ90zFKlVfEK9HlEUH1eDzdeI3WzguQsAFV5VIBaAwHtbned6DcQPMPT86VKvTiqI3zFgDzH8J+oq05JnXrHxmlSrTikuJMx5jrVsKY3+VKlWnUf/9k=",
        loation: { lat: 40.7484405, lng: -73.9878531 },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Empire state building",
        description: "One of the bigest skyscrappers in the world",
        address: "20 W 34th St, New York, NY 10001, United States",
        image: "data:image/jpeg;base64,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",
        loation: { lat: 40.7484405, lng: -73.9878531 },
        creator: "u2",
    },
];
const getPlacesByPlaceId = (pid) => {
    const foundPlace = exports.DUMMY_PLACES.find((place) => place.id === pid);
    return foundPlace;
};
exports.getPlacesByPlaceId = getPlacesByPlaceId;
const getPlacesByUserId = (uid) => {
    const foundPlace = exports.DUMMY_PLACES.find((place) => place.creator === uid);
    return foundPlace;
};
exports.getPlacesByUserId = getPlacesByUserId;
//edit places by user id
const editPlacesByPlaceId = (pid) => {
    const foundPlace = exports.DUMMY_PLACES.find((place) => place.creator === pid);
    return foundPlace;
};
exports.editPlacesByPlaceId = editPlacesByPlaceId;
//https://example.com/comments/1
