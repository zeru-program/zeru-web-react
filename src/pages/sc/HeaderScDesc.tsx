import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const urlDb = "https://zerupgmm-default-rtdb.firebaseio.com/";

const HeaderScDesc: React.FC = () => {
    let { id } = useParams();
    const [result, setResult] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            const decodedId = decodeURIComponent(id);

            const fetchData = async () => {
                const response = await fetch(urlDb + "sourceCode.json");
                const data = await response.json();
                for (let key in data) {
                    const val = data[key];
                    if (val.title === decodedId) {
                        setResult(val);
                        return;
                    }
                }
                setResult(null); // not found
            };

            fetchData();
        } else {
            // handle the case where id is undefined
        }
    }, [id]);

    if (!result) {
        return null; // or some fallback UI
    }

    return (
        <Helmet>
            <title>{result.title} - Sc zeru</title>
            <meta name="title" content={`${result.title} - Sc`} />
            <meta name="description" content={result.description} />
            <meta
                name="keywords"
                content={`zeru program, ${result.title}, tutorial, source code html css js`}
            />
        </Helmet>
    );
};

export default HeaderScDesc;
