using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject box;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GameObject cur = Instantiate(box) as GameObject;
            cur.transform.position = new Vector3(0, 1, -9);

            cur.GetComponent<Rigidbody>().velocity = new Vector3(0, 0, 5);
        }
    }
}
