
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello World');
})

router.get('/api', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM personal_budget', (err, rows)=>{
                if(err) return res.send(err)
            
                res.json(rows)
        })
    })
})

router.post('/api', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        //console.log(req.body);
        conn.query('INSERT INTO personal_budget set ?', [req.body] ,(err, rows)=>{
               if(err) return res.send(err)
            
               res.send('ok')
        })
    })
})

router.put('/api/:id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE personal_budget set ? WHERE id = ?', [req.body, req.params.id] ,(err, rows)=>{
               if(err) return res.send(err)
            
               res.send('updated')
        })
    })
})


router.delete('/api/:id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM personal_budget WHERE id = ?', [req.params.id] ,(err, rows)=>{
               if(err) return res.send(err)
            
               res.send('Delete')
        })
    })
})

module.exports = router